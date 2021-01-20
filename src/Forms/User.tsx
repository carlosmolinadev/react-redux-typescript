import { Button } from "@material-ui/core";
import React, { ReactElement } from "react";
import { database, functions } from "../utils/firebase";
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
      date: new Date(),
    });
  };

  const makeCall = async () => {
    // const query = functions.httpsCallable("search");
    // await query({ titulo: "Honda" });
    // console.log(query);

    const newObject = { isRedDiamond: true, titulo: "Juan" };

    const keys = Object.entries(newObject);

    let response: any;
    response = await axios.post(
      "http://localhost:5001/elasticsearch-39019/us-central1/search",
      { isRedDiamond: true, titulo: "Juan" }
    );

    console.log(keys);
  };

  return (
    <div>
      <Button onClick={addUser}>Add User</Button>
      <Button onClick={makeCall}>Make call</Button>
      <Button onClick={addCarAdd}>Add Car</Button>
    </div>
  );
}
