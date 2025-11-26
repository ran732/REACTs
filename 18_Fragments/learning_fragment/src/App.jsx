import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/Errormessage";
// import React from "react";
import "./App.css";

function App() {
  // return (      //Fragment without map method
  //   <>
  //     <h1> Healthy Food</h1>
  //     <ul class="list-group">
  //       <li class="list-group-item">Dal</li>
  //       <li class="list-group-item">Green vegetable</li>
  //       <li class="list-group-item">Salad</li>
  //       <li class="list-group-item">Fruits</li>
  //       <li class="list-group-item">Milk</li>
  //     </ul>
  //   </>
  //    );

  //Map method to display list items
  let fooditems = [
    "Sabzi",
    "Green vegetable",
    "Salad",
    "Fruits",
    "Milk",
    "Ghee",
  ];
  //let fooditems = [];

  return (
    <>
      <h1> Healthy Food</h1>
      <ErrorMessage items={fooditems}></ErrorMessage>
      <Fooditems items={fooditems}></Fooditems>
    </>
  );
}

export default App;
