import React from "react";
import Todoitem from "./Todoitem";

const Todoitems = ({ todoitems,onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <Todoitem key={item.todo_Name}
          todoName={item.todo_Name}
          todoDate={item.todo_Date} 
          onDeleteClick={onDeleteClick}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
