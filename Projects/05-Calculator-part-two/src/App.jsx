import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

const App = () => {

  const [calVal,setcalVal] =useState("");
  const onButtonClick =(buttonText) => {
    if (buttonText === 'C') {
      setcalVal("");
      
    }else if (buttonText === '='){
      const result = eval(calVal);
      setcalVal(result);

    }else{
      let newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue)

    }

    };

  return (
    <center>
    <div id={styles.calculator}>
    <Display displayValue = {calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
    
    </div>
    </center>
  );
};

export default App;
