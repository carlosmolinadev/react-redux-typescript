import { Button } from "@material-ui/core";
import React, { ReactElement } from "react";
import { database, functions, timestamp } from "../utils/firebase";
import axios from "axios";

interface Props {}

export default function User({}: Props): ReactElement {
  const addUser = () => {
    database.collection("usuarios").add({
      nombre: "Carlos",
      apellido: "Molina",
      telefono: "78595549",
    });
  };

  const addCarAdd = () => {
    database.collection("carros").add({
      owner: "Carlos Molina",
      price: 2500,
      kilometers: 5000,
      telephone: "755995456",
      email: "carlitox_gomial@hotmail.com",
      isRedDiamond: true,
      isEmerald: false,
      isSapphire: false,
      date: timestamp.now(),
    });
  };

  const getRequest = async () => {
    let response: any;
    response = await axios.get(
      "http://localhost:5001/elasticsearch-39019/us-central1/search",
      {
        params: {
          nombre: "carlos",
          titulo: "Bachiller",
          nested: ["Carlos", "Molina", "Martinez"],
        },
      }
    );

    console.log(response);
  };

  const query = { title: "Carlos", description: "Adobe", year: "1990" };

  const iterateObjects = (object: any) => {
    const finalObject = [];
    for (let key in object) {
      let tempObject: any = {};
      tempObject[key] = object[key];
      const term = { term: tempObject };
      finalObject.push(term);
    }

    console.log(finalObject);
  };

  const makeCall = async () => {
    // const query = functions.httpsCallable("search");
    // await query({ titulo: "Honda" });
    // console.log(query);

    const newObject = { isRedDiamond: true, titulo: "Juan" };

    const keys = Object.entries(newObject);

    let response: any;
    response = await axios.post(
      "https://us-central1-elasticsearch-39019.cloudfunctions.net/search",
      { isRedDiamond: true, titulo: "Juan" }
    );

    console.log(response);
  };

  const getCars = async () => {
    // const books = await database
    //   .collectionGroup("books")
    //   .where("published", "==", "1974")
    //   .get();
    // books.forEach((doc) => console.log(doc.id));

    let dat: string[] = [];
    const document = await database
      .collection("carros")
      .doc("UslqVPwk7HqVjp0ZCNPd");

    document.get().then((data) => {
      const tempData = data.data();
      for (let image in tempData) {
        dat.push(tempData[image]);
        console.log(dat);
      }
    });
  };

  return (
    <div>
      <Button color="primary" onClick={addUser}>
        Add User
      </Button>
      <Button onClick={makeCall}>Make call</Button>
      <Button onClick={addCarAdd}>Add Car</Button>
      <Button onClick={getRequest}>Get Request</Button>
      <Button onClick={getCars}>Get Car</Button>
      <Button onClick={() => iterateObjects(query)}>Iterate objects</Button>
    </div>
  );
}
