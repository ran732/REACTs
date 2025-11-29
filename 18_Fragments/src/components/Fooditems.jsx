import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  
  let onBuyButtonClick = (item,event) => {
    let newItems = [...activeItems,item];
    setActiveItems(newItems);

  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          FoodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButtonClick(item, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
