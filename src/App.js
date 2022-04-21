import { useState } from 'react';
import './App.css';

let total = ' ';
function App() {
  const [screen, setScreen] = useState('0');
  const handleClick = (val) => {
    total += val;
    setScreen(total);
  };

  const handleEquals = () => {
    setScreen(eval(total));
    total = ' ';
  };

  const handleClear = () => {
    setScreen('0');
    total = ' ';
  };
  return (
    <div className="App">
      <h1>calculator</h1>
      <div class="container">
        <span>{screen}</span>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={handleClear}>c</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default App;
