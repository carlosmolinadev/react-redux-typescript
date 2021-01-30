import { Button } from "@material-ui/core";
import React, { ReactElement } from "react";
import { database, functions, timestamp } from "../utils/firebase";
import axios from "axios";
import { date } from "yup";

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
    response = await axios.get("http://localhost:5000/vehiculos", {
      params: {
        category: "vehiculos",
        subcategories: ["autos_usados"],
        price: { gte: 1000, lte: 6000 },
        locations: ["santa_tecla"],
        coordenates: { lat: 40, lon: -50 },
      },
    });

    // response = await axios.get("http://localhost:5000/vehiculos", {
    //   params: {
    //     nombre: "carlos",
    //     titulo: "Bachiller",
    //     nested: ["Carlos", "Molina", "Martinez"],
    //     subnested: { name: { subname: "Carlos" } },
    //   },
    // });

    console.log(response);
  };

  const putRequest = async () => {
    const res = await axios.put("http://localhost:5000/vehiculos", {
      category: "vehiculos",
      subcategory: "autos_usados",
      brand: "Toyota",
      model: "Civic",
      title: "Toyota usado en perfectas condiciones",
      price: 5000,
      year: "2000",
      status: "diamond",
      location: "san_salvador",
      email: "carlos_molina@gmail.com",
      phone: "75586542",
      createdAt: new Date(),
    });
    console.log(res.data);
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
      {/* <Button onClick={makeCall}>Make call</Button>
      <Button onClick={addCarAdd}>Add Car</Button> */}
      <Button onClick={getRequest}>GET Request</Button>
      <Button onClick={putRequest}>PUT Request</Button>
      {/* <Button onClick={getCars}>Get Car</Button>
      <Button onClick={() => iterateObjects(query)}>Iterate objects</Button> */}
    </div>
  );
}
