import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/Welcome";

import "./App.css";

const App = () => {
  // Add
  const [todoitems, settodoitems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    settodoitems((currValue) => [
      ...currValue,
      { todo_Name: itemName, todo_Date: itemDueDate },
    ]);
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
      { todoitems.length === 0 && <Welcome />}
    </center>
  );
};

export default App;
