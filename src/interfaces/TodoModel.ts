import Guest from "./Guest";
import Todo from "./Todo";
import { Action, Thunk } from "easy-peasy";

export default interface TodoModel {
  todos: Todo[];
  addTodo: Thunk<TodoModel, Todo>;
  setTodo: Action<TodoModel, Todo[]>;
  getTodos: Thunk<TodoModel>;
  loadTodo: Action<TodoModel, Todo>;
}
