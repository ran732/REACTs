import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/Welcome";
import "./App.css";
import { todoitemsContext } from "./store/todo-item-store";

const App = () => {
  // Add
  const [todoitems, settodoitems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    settodoitems((currValue) => [
      ...currValue,
      { todo_Name: itemName, todo_Date: itemDueDate },
    ]);
  };

  // Delete
  const DeleteItem = (todoitemName) => {
    const newTodoItems = todoitems.filter(
      (item) => item.todo_Name !== todoitemName,
    );
    settodoitems(newTodoItems);
  };

  return (
    <todoitemsContext.Provider
      value={{
        todoitems,
        addNewItem,
        DeleteItem,
      }}
    >
      <center className="todo-container">
        <AppName> </AppName>
        <AddTodo></AddTodo>
        <div className="items-container">
          <Todoitems></Todoitems>
        </div>
        <Welcome />
      </center>
    </todoitemsContext.Provider>
  );
};

export default App;
