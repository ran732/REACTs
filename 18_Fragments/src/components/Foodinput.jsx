import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items At Here..."
      className={styles["food-input"]} //styles.Food-input
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
