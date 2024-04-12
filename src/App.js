import "./App.css";
import Timer from "./components/timer";
import { useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="timer">
      <h1>React Event Subscriptions</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
