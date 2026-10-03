import Item from './Item';

const Fooditems = ({ destructring_fooditem}) => {
  

  return (
    <ul className="list-group">
      { destructring_fooditem.map((i) => (
        <Item key={i} foodItems={i} />
      ))}
    </ul>
  );
};

export default Fooditems;

