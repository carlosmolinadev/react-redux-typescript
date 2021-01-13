import Guest from "./Guest";
import Todo from "./Todo";
import { Action } from "easy-peasy";

export default interface StoreModel {
  todos: Todo[];
  guests: Guest[];
  addTodo: Action<StoreModel, Todo>;
}
