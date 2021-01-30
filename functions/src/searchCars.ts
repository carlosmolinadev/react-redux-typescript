import { app, client } from "./elasticSearch";
import * as functions from "firebase-functions";
const bodybuilder = require("bodybuilder");

app.get("/carros", async (req, res) => {
  const category = req.query.category;
  const subcategories = req.query.subcategories;
  const price: any = req.query.price;
  const locations = req.query.locations;
  const coordenates = req.query.coordenates;

  const makeSearch = () => {
    const builder = bodybuilder()
      .addQuery("term", "category", category)
      .addQuery("terms", "subcategories", subcategories)
      .addQuery("terms", "location", locations)
      .addQuery("terms", "status", ["diamond", "sapphire", "ruby", "standard"])
      .orQuery("match", { status: { query: "diamond", boost: 6 } })
      .orQuery("match", { status: { query: "ruby", boost: 4 } })
      .orQuery("match", { status: { query: "sapphire", boost: 2 } })
      .addFilter("range", { price: JSON.parse(price) });
    return builder.build();
  };

  console.log(locations);
  console.log(coordenates);
  console.log(price);
  try {
    // const finalObject = [];
    // if (Object.keys(req.query).length !== 0) {
    //   for (let key in req.query) {
    //     let tempObject: any = {};
    //     tempObject[key] = req.query[key];
    //     const term = { term: tempObject };
    //     finalObject.push(term);
    //   }
    // }

    const { body } = await client.search({
      index: "carros",
      from: 0,
      size: 20,
      body: makeSearch(),
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

//GEOLOCATION
// bodybuilder()
//         .query('match_all')
// 		.filter('geo_distance',{'distance':'15km', 'location':{'lon':13.723429316822578, 'lat':-89.37272416333286}})
//         .build()

// .addQuery('match', {'status': {'query':'diamond','boost':6}})
