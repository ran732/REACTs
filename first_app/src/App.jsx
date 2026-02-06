import Hello from "./hello";
import KgButton from "./KgButton";

import Random from "./Random";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div > 
      <div className="text-center"> 
      <h2 >Hello Ranjeet! 🎉 HMR is working.</h2>
      <p>This is your first React project.</p>

      <KgButton></KgButton>

      <Hello>
        <h1>Welcome to my HEllo!</h1>
        <p>this is inside in </p>
      </Hello>

      <Random className="text-center" />
      <Random />
      <Random />
      <Random />
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
