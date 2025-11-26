import styles from "./App.module.css";
import ButtonsContainer from "./assets/components/ButtonsContainer.jsx";
import Display from "./assets/components/Display.jsx";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
