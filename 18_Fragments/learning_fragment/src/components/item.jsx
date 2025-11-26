




import styles from "./item.module.css";

const Item = (props) => {
  const { fooditem } = props;
  return (
    <li key={fooditem} className={`${styles["kg-item"] || ""} list-group-item`}>
      <span className={styles["item-text"] || ""}>{fooditem}</span>
    </li>
  );
};

export default Item;
