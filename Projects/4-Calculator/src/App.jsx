import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
const App = () => {
  return (
    <center>
    <div id={styles.calculator}>
      <Display></Display>
      <ButtonsContainer />
    </div>
    </center>
  );
};

export default App;
