import { app } from "./elasticSearch";
import * as functions from "firebase-functions";

export const postgres = functions.https.onRequest(app);
