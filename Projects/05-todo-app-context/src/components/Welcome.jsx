
import styles from "./Welcome.module.css";
import React, { useContext } from "react";
import { todoitemsContext } from "../store/todo-item-store";

const Welcome = () => {
  const contextObj = useContext (todoitemsContext);
  const todoitems = contextObj.todoitems;
  return (
    <>
  {todoitems.length === 0 &&(  
    <div className={styles.head}>
      <h3>
        Enjoy Your day !! <br />
        Till Now you do not have any task to work on...
      </h3>
    </div>)}
      </>
    
  );
};

export default Welcome;
