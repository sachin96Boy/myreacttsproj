import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = () => {
    console.log(input);
  };
  return (
    <div className="App">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
