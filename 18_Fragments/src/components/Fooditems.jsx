import { useState } from "react";
import Item from "./Item";

const Fooditems = ({ destructring_fooditem }) => {

  let [activeItems,setactiveItems] = useState([]);

  let onBuyButton = (item,event) => {
    let newItems = [...activeItems,item];  //spread active item
    setactiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {destructring_fooditem.map((i) => ( 
        <Item 
        key={i} 
        foodItems={i} 
        bought={activeItems.includes(i)}
        handleBuyButton={(event) => onBuyButton(i,event)}
        
        />
      ))}
    </ul>
  );
};

export default Fooditems;
