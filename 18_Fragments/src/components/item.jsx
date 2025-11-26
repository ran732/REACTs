import { Button } from "bootstrap";
import styles from "./item.module.css";


const Item = ({ fooditem }) => {
const handleBuyButtomClick = (event) => {
  console.log(event);
  console.log(`${fooditem} being bought.`);
}


  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["item-text"]}>{fooditem}</span>

      <button className={`${styles["buy-button"]} btn btn-info`}
      onClick={(event) =>handleBuyButtomClick(event)}> Buy </button>
    </li>
  );
};

export default Item;
