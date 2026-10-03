import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Apple", "Banana", "Mango", "Grapes", "Ghee"];

  // if (foodItems.length == 0) {
  //   return <h3>I am still hungry.</h3>
  // }

  // let emptymessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null  // ternery operator

  return (
    <>
      <h1> Healthy Food</h1>

      <Fooditems destructring_fooditem = {foodItems} />
      <ErrorMessage item= {foodItems} />
      

   
    </>
  );
}

export default App;
