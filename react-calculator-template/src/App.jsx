import React, { useState } from 'react';
import './App.css';
import Keypad from './personal_components/Keypad';
import Display from './personal_components/Display';
function App() {
  const [input, setInput] = useState('');

  // Handle input
  function handleInput(e) {
    // TODO: Implement handleInput to update the input state.
    const inputValue = e.target.name;

    // Geting the last character of the input
    const lastInput = input.slice(-1);

    // Checking the last input is an operation symbol
    const isLastInputOperation = ['+', '-', '*', '/'].includes(lastInput);
    const isCurrentInputOperation = ['+', '-', '*', '/'].includes(inputValue);

    if (isLastInputOperation && isCurrentInputOperation) {
      setInput(input.slice(0, -1) + inputValue);
      } 
    else {
      setInput(input + inputValue);
      }
  }
  // Calculate the result
  function calculate() {
    // TODO: Implement calculation logic safely here.
    const result = eval(input);
    setInput(result.toString());
  }

  // Clear the input
  function clear() {
    setInput('');
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <Display 
            input={input}/>
      <Keypad
            onInput={handleInput}
            onCalculate={calculate}
            onClear={clear}/>

    </div>
  );
}

export default App;