import { useState } from "react";
import styles from "./AddTodo.module.css";
import { MdAddShoppingCart } from "react-icons/md";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center ">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            className={styles["input_values"]}
            placeholder="Enter todo here :"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            className={styles["input_values"]}
            onChange={handleDueDateChange}
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
