import React from "react";
import Todoitem from "./Todoitem";

const Todoitems = ({ todoitems }) => {
  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <Todoitem
          todoName={item.todo_Name}
          todoDate={item.todo_Date}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
