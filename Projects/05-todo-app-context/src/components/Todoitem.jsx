import { useContext } from "react";
import s from "./Todoitem.module.css";
import { FiDelete } from "react-icons/fi";
import { todoitemsContext } from "../store/todo-item-store";

const Todoitem = ({ todoName, todoDate }) => {
  const { DeleteItem } = useContext(todoitemsContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeleteItem(todoName)}
          >
            <FiDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
