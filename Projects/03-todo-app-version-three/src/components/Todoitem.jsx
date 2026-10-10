import s from './Todoitem.module.css'
import { FiDelete } from "react-icons/fi";


const Todoitem = ({todoName,todoDate,onDeleteClick}) => {
  return (
    
      <div className="container">
        <div className="row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={ () => onDeleteClick(todoName)}
            >
              <FiDelete />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Todoitem;