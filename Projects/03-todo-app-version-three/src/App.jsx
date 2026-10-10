import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/Welcome";

import "./App.css";

const App = () => {

  // const initialtodoitems = [
  //   {
  //     todo_Name: "Buy Milk",
  //     todo_Date: "02/03/2026",
  //   },
  //   {
  //     todo_Name: "go to college",
  //     todo_Date: "04/06/2026",
  //   },
  //   {
  //     todo_Name: "Work hard",
  //     todo_Date: "12/11/2025",
  //   },
  // ];


  
  // Add
  const [todoitems, settodoitems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added ${itemName}, Date : ${itemDueDate}`);
    const newTodoitems = [
      ...todoitems,
      { todo_Name: itemName, todo_Date: itemDueDate },
    ];
    settodoitems(newTodoitems);
  };


  // Delete
  const handleDeleteItem = (todoitemName) => {
    const newTodoItems = todoitems.filter(
      (item) => item.todo_Name !== todoitemName,
    );
    settodoitems(newTodoItems);
    // console.log(`${todoitemName} deleted!`);
  };

  return (
    <center className="todo-container">
      <AppName> </AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <div className="items-container">
        <Todoitems
          todoitems={todoitems}
          onDeleteClick={handleDeleteItem}
        ></Todoitems>
      </div>
      {todoitems.length === 0 && <Welcome />}
    </center>
  );
};

export default App;
