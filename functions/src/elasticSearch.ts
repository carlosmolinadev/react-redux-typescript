import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const bodyParser = require("body-parser");
const { Client } = require("@elastic/elasticsearch");

export const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());

admin.initializeApp(functions.config().firebase);

const env = functions.config();
const auth = {
  username: env.elasticsearch.username,
  password: env.elasticsearch.password,
};

export const client = new Client({
  node: env.elasticsearch.url,
  auth: auth,
});

app.post("/", async (req, res) => {
  try {
    const { body } = await client.sql.query({
      body: {
        query: "SELECT * FROM carros WHERE owner = 'Carlos Molina'",
      },
    });

    const data = body.rows.map((row: string | any[]) => {
      const obj: any = {};
      for (var i = 0; i < row.length; i++) {
        obj[body.columns[i].name] = row[i];
      }
      return obj;
    });

    res.send(JSON.stringify(data));
    // res.send(JSON.stringify(data));
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});

app.get("/", async (req, res) => {
  console.log("Parameter", req.params);
  console.log("Query", req.query);

  const keys = [];
  for (const key in req.query) {
    keys.push(key);
  }

  res.status(200).send(keys);
});

export const createCarAdd = functions.firestore
  .document("carros/{id}")
  .onCreate(async (snap, context) => {
    await client.index({
      index: "carros",
      type: "_doc",
      id: snap.id,
      body: snap.data(),
    });
  });

export const updateCarAdd = functions.firestore
  .document("carros/{id}")
  .onUpdate(async (snap, context) => {
    await client.index({
      index: "carros",
      type: "_doc",
      id: snap.before.id,
      body: snap.after.data(),
    });
  });

export const deleteCarAdd = functions.firestore
  .document("carros/{id}")
  .onDelete(async (snap, context) => {
    await client.delete({
      index: "carros",
      type: "_doc",
      id: snap.id,
    });
  });

// export const search = functions.https.onCall(async (data, context) => {
//   const response = await client.search({
//     index: "carros",
//     body: {
//       query: {
//         titulo: data.titulo,
//       },
//     },
//   });
//   console.log(response);
//   return response;
// });

export const search = functions.https.onRequest(app);

// app.post("/", async (req, res) => {
//   try {
//     const response = await client.search({
//       index: "carros",
//       body: {
//         query: {
//           match: { isRedDiamond: req.body.isRedDiamond },
//         },
//       },
//     });

//     const concatResponse = response.body.hits;
//     res.send(JSON.stringify(concatResponse));
//   } catch (error) {
//     res.send(JSON.stringify(error));
//   }
// });
