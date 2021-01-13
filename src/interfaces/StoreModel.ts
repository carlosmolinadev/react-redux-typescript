import Guest from "./Guest";
import Todo from "./Todo";
import { Action, Thunk } from "easy-peasy";
import TodoModel from "./TodoModel";

export default interface StoreModel {
  guests: Guest[];
  todos: TodoModel;
}

// addTodo: Action<StoreModel, Todo>;

// todos: Todo[];
//   addTodo: Thunk<StoreModel, Todo>;
//   setTodo: Action<StoreModel, Todo[]>;
//   getTodos: Thunk<StoreModel>;
//   loadTodo: Action<StoreModel, Todo>;
