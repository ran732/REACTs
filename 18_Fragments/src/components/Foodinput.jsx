import styles from "./Foodinput.module.css";
const Foodinput = ({handleOnChange}) => {

   
  return (
    <input
      type="text"
      placeholder="Enter Food Items At Here..."
      className={styles["food-input"]}  //styles.Food-input
      onChange={handleOnChange}
    />
  );
};

export default Foodinput;
