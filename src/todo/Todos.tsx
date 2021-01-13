import React, { ReactElement, useEffect } from "react";
import { useStoreState, useStoreActions } from "../hooks";

interface Props {}

export default function Todos({}: Props): ReactElement {
  const todos = useStoreState((state) => state.todos);
  const [value, setValue] = React.useState("");
  const getTodos = useStoreActions((state) => state.getTodos);
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      <h1>{todos.map((todo) => todo.name)}</h1>
    </div>
  );
}
