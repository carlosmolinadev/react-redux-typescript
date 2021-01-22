import { app, client } from "./elasticSearch";
import * as functions from "firebase-functions";

app.get("/cars", async (req, res) => {
  try {
    const finalObject = [];
    if (Object.keys(req.query).length !== 0) {
      for (let key in req.query) {
        let tempObject: any = {};
        tempObject[key] = req.query[key];
        const term = { term: tempObject };
        finalObject.push(term);
      }
    }
    const body = await client.search({
      index: "carros",
      _source: "title",
      from: req.query.from,
      size: 1,
      body: {
        query: {
          match: {
            owner: "Carlos",
          },
        },
      },
    });

    res.status(200).send(body);
  } catch (error) {
    res.send(error);
  }
});

app.post("/cars", async (req, res) => {
  await client.index({});
});

export const searchCars = functions.https.onRequest(app);

//-----------------SEARCH PATTERNS

// const body = await client.search({
//   index: "amazon_products",
//   body: {
//     query: {
//       range: {
//         price: {
//           gte: 10,
//           lte: 20,
//           boost: 2,
//         },
//       },
//     },
//   },
// });

// body: {
//   query: {
//     range: {
//       orderDate: {
//         gte: "01/09/2017",
//         lte: "30/09/2017",
//         format: "dd/MM/yyyy",
//       },
//     },
//   },
// },

// body: {
//   query: {
//     exists: {
//       field: "description",
//     },
//   },
// },

// body: {
//   query: {
//     multi_match: {
//       query: "adobe",
//       fields: ["title", "description"],
//     },
//   },
// },

//HOW TO GET SEPARATE OBJECTS
// const finalObject = [];
//     if (Object.keys(req.query).length !== 0) {
//       for (let key in req.query) {
//         let tempObject: any = {};
//         tempObject[key] = req.query[key];
//         const term = { term: tempObject };
//         finalObject.push(term);
//       }
//     }
