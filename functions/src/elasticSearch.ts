import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const bodyParser = require("body-parser");
const { Client } = require("@elastic/elasticsearch");

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());

admin.initializeApp(functions.config().firebase);

const env = functions.config();
const auth = {
  username: env.elasticsearch.username,
  password: env.elasticsearch.password,
};

const client = new Client({
  node: env.elasticsearch.url,
  auth: auth,
});

app.post("/", async (req, res) => {
  try {
    const response = await client.search({
      index: "carros",
      body: {
        query: {
          match: { isRedDiamond: req.body.isRedDiamond },
        },
      },
    });

    const concatResponse = response.body.hits;
    res.send(JSON.stringify(concatResponse));
  } catch (error) {
    res.send(JSON.stringify(error));
  }
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
