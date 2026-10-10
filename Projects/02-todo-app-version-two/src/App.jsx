import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";

import "./App.css";

const App = () => {

  const todoitems = [
    {
      todo_Name : 'Buy Milk',
      todo_Date : "02/03/2026"
    },
    {
      todo_Name : 'go to college',
      todo_Date : "04/06/2026"
    },
    {
      todo_Name : 'Work hard',
      todo_Date : "12/11/2025"
    }
  ]


  return (
    <center className="todo-container">
      <AppName> </AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <Todoitems todoitems = {todoitems}></Todoitems>
     
      </div>
    </center>
  );
};

export default App;
