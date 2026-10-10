import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";

function App() {
  // let foodItems = ["Apple", "Banana", "Mango", "Grapes", "Patato",];

  // let textStateArr = useState("Food input enter by user");
  // let texttoshow =textStateArr[0];
  // let settexttoshow = textStateArr[1];
  // console.log(`Current value of textState : ${texttoshow}`)

  let [foodItems, setfoodItems] = useState([]);


  const onKeyDown = (event) => {
    if (event.key == 'Enter') {
      let newFoodItem = event.target.value
      event.target.value = " ";
      let newItems = [...foodItems,newFoodItem]
      setfoodItems(newItems)
    }
 
  };

  return (
    <>
      <Container>
        <center>
          <h1 className="header-text"> Healthy Food</h1>
        </center>
        <Foodinput handlekeyDown={onKeyDown}/>
        <Fooditems destructring_fooditem={foodItems} />
        <ErrorMessage item={foodItems} />
      </Container>
      <Container>
       <p> Yes The items in the that appropriate conditon </p> </Container>
    </>
  );
}

export default App;
