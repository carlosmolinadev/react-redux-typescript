import { action, createStore, thunk } from "easy-peasy";
import StoreModel from "../interfaces/StoreModel";
import TodoModel from "../interfaces/TodoModel";
// import Store from "./Store";

const TodoStore: TodoModel = {
  todos: [{ name: "Carlos", done: true, text: "This is a nice post mate!" }],
  loadTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  addTodo: thunk(async (state, payload) => {
    const response = await fetch("http://localhost:3008/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    state.loadTodo(payload);
  }),
  setTodo: action((state, payload) => {
    state.todos = payload;
  }),
  getTodos: thunk(async (state) => {
    const respose = await fetch("http://localhost:3008/todos");
    const todos = await respose.json();
    state.setTodo(todos);
  }),
};

export default TodoStore;
