import StoreModel from "../interfaces/StoreModel";
import { action } from "easy-peasy";

const Store: StoreModel = {
  todos: [],
  guests: [{ name: "Carlos", id: "25" }],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
};

export default Store;
