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
    <div >
      <Container className="main-container">
        <h1 className="food-heading"> Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown} > </FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodItems items={foodItems}></FoodItems>
        
      </Container>

      <Container >
        
          This is the list of healthy food items. if you will follow this list,
          you will stay healthy and well beings.
        
      </Container>
      
      <Container>
        props.children that means passing data on app.jsx's inside component tag to its original tag
        
      </Container>
      <Container>
        <h3>Topics Cover:---</h3>
        <h5>1.Class Vs Functions Components</h5>
        <h5>2.bootstrap in React</h5>
        <h5>3.Fragments,Map method,Passing Data via Props,css module</h5>
        <h5>4.Passing Components as Children,Handling Events,Passing Functions via props</h5>
         <h5>5.State managements, states vs props,useState,hook</h5>
      </Container>
    </div>
  );
}

export default App;
