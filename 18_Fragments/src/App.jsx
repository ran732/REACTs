import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/Errormessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
// import React from "react";
import "./App.css";

function App() {
  let [foodItems, setFoodItems] = useState(["Apple", "Banana","Mango", "Grapes"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown} > </FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodItems items={foodItems}></FoodItems>
        
      </Container>

      {/* <Container>
        <p>
          This is the list of healthy food items. if you will follow this list,
          you will stay healthy and well beings.
        </p>
      </Container> */}
    </>
  );
}

export default App;
