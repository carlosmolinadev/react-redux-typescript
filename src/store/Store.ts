export {};
// import StoreModel from "../interfaces/StoreModel";
// import { action, thunk } from "easy-peasy";

// const Store: StoreModel = {
//   todos: [],
//   guests: [{ name: "Carlos", id: "25" }],
//   addTodo: action((state, payload) => {
//     state.todos.push(payload);
//   }),
//   setTodo: action((state, payload) => {
//     state.todos = payload;
//   }),
//   getTodos: thunk(async (state) => {
//     const respose = await fetch("http://localhost:3004/todos");
//     const todos = await respose.json();
//     state.setTodo(todos);
//   }),
// };

// export default Store;
