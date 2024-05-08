import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header/Header";
import TodoList from "./ToDoList/ToDoList";
import AddToDo from "./AddToDo/AddToDo";
// const List = () => {
//   return (
//     <ul>
//       <li>
//         <input type="checkbox" name="" id="" /> do something
//       </li>
//       <li>
//         <input type="checkbox" name="" id="" /> asd
//       </li>
//     </ul>
//   );
// };
// const Info = () => {
//   return (
//     <p>
//       <span>Comleted: 2</span> <span>Uncomleted: 0</span>
//     </p>
//   );
// };

// const Search = () => {
//   const esim = { placeholder: "add task", btn: "Add Item" };
//   return (
//     <div>
//       <input type="text" placeholder={esim.placeholder} />
//       <button>{esim.btn}</button>
//     </div>
//   );
// };
// const Header = () => {
//   const headerStyle = {
//     color: "green",
//   };
//   return <h1 style={headerStyle}>To Do</h1>;
// };
// const jsxElement = (
//   <div title="hellooo">
//     <Header />
//     <Search />
//     <h3>Task List</h3>
//     <List />
//     <hr />
//     <Info />
//   </div>
// );

const jsxElement = (
  <div className="app">
    <Header />
    <TodoList />
    <AddToDo />
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
