import { app, client } from "./elasticSearch";
import * as functions from "firebase-functions";

app.get("/cars", async (req, res) => {
  try {
    const body = await client.sql.translate({
      body: {
        query: "SELECT * FROM carros",
      },
    });

    res.status(200).send(body);
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});

app.post("/cars", async (req, res) => {
  await client.index({});
});

export const searchCars = functions.https.onRequest(app);
