import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const _GREETINGS = [
  "Hello",
  "Hola",
  "Guten Tag",
  "Bonjour",
  "Salve", 
  "Konnichiwa"
]

const App = () => {
  const [val, setVal] = useState("0");
  useEffect(()=>{
    document.getElementById("greetings").innerText = _GREETINGS[parseInt(val)];
  },[val]);

  const updateVal = (e) => { setVal(e.target.value)}

  return (
    <div>
      <h1>How do you say "Hello"?</h1>
      <p>Choose a language</p>
      <select value={val} onChange={updateVal}>
        <option value="0">English</option>
        <option value="1">Spanish</option>
        <option value="2">German</option>
        <option value="3">French</option>
        <option value="4">Italian</option>
        <option value="5">Japanese</option>
      </select>
      <p id="greetings"></p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

export default App;
