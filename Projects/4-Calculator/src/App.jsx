import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./assets/components/ButtonsContainer.jsx";
import Display from "./assets/components/Display.jsx";

function App() {
  
  const [CalVal, setCalVal]=useState("");
  const onButtonClick = (buttonText) => {
    if  (buttonText=== 'C'){
      setCalVal("");

    }else if (buttonText === '=') {
      const result = eval(CalVal);
      setCalVal(result);

    }else{
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  
  };




  return (
    <div className={styles.calculator} >
      <Display displayValue={CalVal}/>
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
