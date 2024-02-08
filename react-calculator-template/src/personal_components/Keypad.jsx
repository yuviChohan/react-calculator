import React from 'react';

function Keypad({ onInput, onCalculate, onClear }) {
  return (
    <div className="keypad">
      <button onClick={onClear}>C</button>
      <button name="/" onClick={onInput}>&divide;</button>
      <button name="*" onClick={onInput}>&times;</button>
      <button name="-" onClick={onInput}>&minus;</button>
      {[ '9', '8', '7'].map((digit) => (
        <button key={digit} name={digit} onClick={onInput}>{digit}</button>
      ))}
      <button className='plus' name="+" onClick={onInput}>+</button>
      {['6', '5', '4'].map((digit) => (
        <button key={digit} name={digit} onClick={onInput}>{digit}</button>
      ))}
      {['3', '2', '1'].map((digit) => (
        <button key={digit} name={digit} onClick={onInput}>{digit}</button>
      ))}
      {['0'].map((digit) => (
        <button id='zero' key={digit} name={digit} onClick={onInput}>{digit}</button>
      ))}
      <button name="=" onClick={onCalculate}>=</button>
      {['.'].map((digit) => (
        <button key={digit} name={digit} onClick={onInput}>{digit}</button>
      ))}
    </div>
  );
}

export default Keypad;
