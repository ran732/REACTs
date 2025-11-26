import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/Errormessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
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

  

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Food</h1>
        <Foodinput handleOnChange={handleOnChange} />
        <ErrorMessage items={fooditems}></ErrorMessage>
        <Fooditems items={fooditems}></Fooditems>
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
