import styles from "./Foodinput.module.css";

const Foodinput = ({handlekeyDown}) => {

  return (
    <div>
      <input type="text"
      placeholder="Enter your food item" 
      className={styles.food_input} 
      onKeyDown={handlekeyDown}
      />
    </div>
  );
};

export default Foodinput;
