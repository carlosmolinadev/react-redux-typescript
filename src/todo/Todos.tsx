import React, { ReactElement } from "react";
import { useStoreState } from "../hooks";

interface Props {}

export default function Todos({}: Props): ReactElement {
  const todos = useStoreState((state) => state.todos);
  const [value, setValue] = React.useState("");
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      <h1>{todos.map((todo) => todo.name)}</h1>
    </div>
  );
}
