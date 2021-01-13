import Guest from "./Guest";
import Todo from "./Todo";
import { Action, Thunk } from "easy-peasy";

export default interface StoreModel {
  todos: Todo[];
  guests: Guest[];
  addTodo: Thunk<StoreModel, Todo>;
  setTodo: Action<StoreModel, Todo[]>;
  getTodos: Thunk<StoreModel>;
  loadTodo: Action<StoreModel, Todo>;
}

// addTodo: Action<StoreModel, Todo>;
