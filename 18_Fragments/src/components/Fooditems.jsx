import Item from "./item";

const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fooditem={item}  handleBuyButton = {() => console.log(`Bought ${item}`)} >
        </Item>
      ))}
    </ul>
  );
};
export default Fooditems;
