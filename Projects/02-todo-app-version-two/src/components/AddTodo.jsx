import styles from'./AddTodo.module.css'

const AddTodo = () => {
  return (
    <div className="container text-center ">
      <div className="row">
        <div className="col-6">
          <input type="text" className={styles['input_values']} placeholder="Enter todo here :" />
        </div>
        <div className="col-4">
          <input type="date"  className={styles['input_values']} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
