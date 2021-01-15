import React, { ReactElement, useState } from "react";
import Input from "./Input";
import Styles from "./Styles";

interface Props {}

export default function FirstApp({}: Props): ReactElement {
  const [input, setInput] = useState("");

  const handleChange = (todo: string) => {
    setInput(todo);
  };
  return (
    <div>
      <Input />
      <Styles />
    </div>
  );
}
