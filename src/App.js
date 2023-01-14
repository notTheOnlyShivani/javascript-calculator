import React, {useState} from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("")
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ["AC", "/", "x", "+", "-", "="];

const handleClick = (event) => {
const number = event.target.textContent;

if (display === '0') {
  setDisplay(number);
} else {
  setDisplay(display + number);
}
};

const handleClear = () => {
  setDisplay('0')
}

const handleSubmit = () => {
  const total = eval(display);
  setDisplay(total);
}

const dotOperator = () => {
  const lastChat = display.charAt(display.length - 1);
  if (!display.length) {
    setDisplay(`0.`);
  } else { 
     if (lastChat === "*" || operators.includes(lastChat)) {
    setDisplay(`${display}0.`)
  } else {
   if (numbers.includes(lastChat)) {
    setDisplay(`${display}.`)
  } else {
    setDisplay(lastChat === "." ? `${display}` : `${display}.`);
   }
  }
  }
}






const handleOperator = (event) => {
  const operator = event.target.textContent;
  if (display.length) {
    setDisplay(`${display}${operator}`)
  }
  const beforeLastChat = display.charAt(display.length - 2);

  const beforeLastChatIsOperator =
    operators.includes(beforeLastChat) || beforeLastChat === "*";

  const lastChat = display.charAt(display.length - 1);
  
  const lastChatIsOperator = operators.includes(lastChat) || lastChat === "*";
  
  if (
    (lastChatIsOperator && operator !== "-") ||
    beforeLastChatIsOperator && lastChatIsOperator
  ) {
    if (beforeLastChatIsOperator) {
      const updatedValue = `${display.substring(0, display.length - 2)}${operator}`;
      setDisplay(updatedValue);
  } else {
    setDisplay(`${display.substring(0, display.length - 1)}${operator}`);
  }
} else {
  setDisplay(`${display}${operator}`);
}
}

  return (
    <div className="App">
     <div className="calculator">
      <div id="display">
        {display}
      </div>
      <div className="grid-container">
      <button className="buttons" id="clear" onClick={handleClear}>AC</button>
      <button className="buttons" id="divide" onClick={handleOperator}>/</button>
      <button className="buttons" id="multiply" onClick={handleOperator}>*</button>
      <button className="buttons" id="seven" onClick={handleClick}>7</button>
      <button className="buttons" id="eight" onClick={handleClick}>8</button>
      <button className="buttons" id="nine" onClick={handleClick}>9</button>
      <button className="buttons" id="subtract" onClick={handleOperator}>-</button>
      <button className="buttons" id="four" onClick={handleClick}>4</button>
      <button className="buttons" id="five" onClick={handleClick}>5</button>
      <button className="buttons" id="six" onClick={handleClick}>6</button>
      <button className="buttons" id="add" onClick={handleOperator}>+</button>
      <button className="buttons" id="one" onClick={handleClick}>1</button>
      <button className="buttons" id="two" onClick={handleClick}>2</button>
      <button className="buttons" id="three" onClick={handleClick}>3</button>
      <button className="buttons" id="equals" onClick={handleSubmit}>=</button>
      <button className="buttons" id="zero" onClick={handleClick}>0</button>
      <button className="buttons" id="decimal" onClick={dotOperator}>.</button>
      </div>
     </div>
    </div>
  );
}

export default App;