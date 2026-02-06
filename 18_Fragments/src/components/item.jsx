import styles from "./Item.module.css";

const Item = ({ FoodItem,bought, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["item-text"]}>{FoodItem}</span>

      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;


// import FoodItems from './FoodItems';
// import styles from './item.module.css'

// const Item=()=>{
//   return(
// <li className={`${styles["kg-item"]} list-group-item`}>
//   <span className={styles["kg-span"]} >{FoodItems}</span>
//   <button className={`${styles.button} btn btn-info `}
//   onClick={()=> console.log(`${FoodItems} being bought`)} > Buy</button>
// </li>
//   )
// };

// export default Item;