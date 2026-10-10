import React, { useContext } from "react";
import Todoitem from "./Todoitem";
import { todoitemsContext } from "../store/todo-item-store";

const Todoitems = () => {
  const { todoitems } = useContext(todoitemsContext);

  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <Todoitem
          key={item.todo_Name}
          todoName={item.todo_Name}
          todoDate={item.todo_Date}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
