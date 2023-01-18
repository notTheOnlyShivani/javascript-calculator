import React, {useState} from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState("0")
  const [input, setInput] = useState("0")
  const operators = ["AC", "/", "x", "+", "-", "="];

const handleNumbers = (event) => {
  const number = event.target.textContent;
  if (!output.length) {
    setInput(`${number}`);
    setOutput(`${number}`);
  } else {
    if (number === "0" && (output === "0" || input === "0")) {
      setOutput(`${output}`);
    } else {
      const lastChat = output.charAt(output.length - 1);
      const isLastChatOperator =
        lastChat === "*" || operators.includes(lastChat);

      setInput(isLastChatOperator ? `${number}` : `${input}${number}`);
      setOutput(`${output}${number}`);
    }
  }
}

const handleClear = () => {
  setOutput("")
  setInput("0")
}

const handleSubmit = () => {
  const total = eval(output);
  setOutput(`${total}`);
  setInput(total);
}

const dotOperator = () => {
  const lastChat = output.charAt(output.length - 1);
  if (!output.length) {
    setOutput("0.");
    setInput("0.");
  } else { 
     if (lastChat === "*" || operators.includes(lastChat)) {
    setOutput(`${output} 0.`)
    setInput("0.")
  } else {
    setInput(
      lastChat === "." || input.includes(".") ? `${input}` : `${input}.`
    );
    const formattedValue =
    lastChat === "." || input.includes(".")
      ? `${output}`
      : `${output}.`;
  setOutput(formattedValue);
    }
  }
}


const handleOperator = (event) => {
  const operator = event.target.textContent;
  if (output.length) {
    setOutput(`${output}${operator}`)
    setInput(`${operator}`)
  }
  const beforeLastChat = output.charAt(output.length - 2);

  const beforeLastChatIsOperator =
    operators.includes(beforeLastChat) || beforeLastChat === "*";

  const lastChat = output.charAt(output.length - 1);
  
  const lastChatIsOperator = operators.includes(lastChat) || lastChat === "*";
  
  if (
    (lastChatIsOperator && operator !== "-") ||
    beforeLastChatIsOperator && lastChatIsOperator
  ) {
    if (beforeLastChatIsOperator) {
      const updatedValue = `${output.substring(0, output.length - 2)}${operator}`;
      setOutput(updatedValue);
  } else {
    setOutput(`${output.substring(0, output.length - 1)}${operator}`);
  }
} else {
  setOutput(`${output}${operator}`);
}
}

  return (
    <div className="App">
     <div className="calculator">
      {/* <div id="display"> */}
      <div id="display" className="output">{output}</div>
      <div id="display" className="input">{input}</div>
        {/* </div> */}
      <div className="grid-container">
      <button className="buttons" id="clear" onClick={handleClear}>AC</button>
      <button className="buttons" id="divide" onClick={handleOperator}>/</button>
      <button className="buttons" id="multiply" onClick={handleOperator}>*</button>
      <button className="buttons" id="seven" onClick={handleNumbers}>7</button>
      <button className="buttons" id="eight" onClick={handleNumbers}>8</button>
      <button className="buttons" id="nine" onClick={handleNumbers}>9</button>
      <button className="buttons" id="subtract" onClick={handleOperator}>-</button>
      <button className="buttons" id="four" onClick={handleNumbers}>4</button>
      <button className="buttons" id="five" onClick={handleNumbers}>5</button>
      <button className="buttons" id="six" onClick={handleNumbers}>6</button>
      <button className="buttons" id="add" onClick={handleOperator}>+</button>
      <button className="buttons" id="one" onClick={handleNumbers}>1</button>
      <button className="buttons" id="two" onClick={handleNumbers}>2</button>
      <button className="buttons" id="three" onClick={handleNumbers}>3</button>
      <button className="buttons" id="equals" onClick={handleSubmit}>=</button>
      <button className="buttons" id="zero" onClick={handleNumbers}>0</button>
      <button className="buttons" id="decimal" onClick={dotOperator}>.</button>
      </div>
     </div>
    </div>
  );
}

export default App;