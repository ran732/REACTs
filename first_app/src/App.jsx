import Hello from "./hello";
import KgButton from "./KgButton";

import Random from "./Random";

function App() {
  return (
    <div>
      <h1>Hello Ranjeet! 🎉 HMR is working.</h1>
      <p>This is your first React project.</p>

      <KgButton></KgButton>

      <Hello></Hello>

      <Random />
      <Random />
      <Random />
      <Random />
    </div>
  );
}

export default App;
