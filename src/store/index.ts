import { action, createStore } from "easy-peasy";
import StoreModel from "../interfaces/StoreModel";
import Store from "./Store";

const store: StoreModel = {
  todos: [],
  guests: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
};

export default createStore<StoreModel>(store);
