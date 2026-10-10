import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { todoitemsContext } from "../store/todo-item-store";

const AddTodo = () => {
  const { addNewItem } = useContext(todoitemsContext);
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} and ${dueDate}`);
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center ">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            className={styles["input_values"]}
            placeholder="Enter todo here :"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className={styles["input_values"]}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <MdAddShoppingCart />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
