import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, SetCounter] = useState(0)

  return(
    <div>
      <h1>Counter App </h1>
      <h2> "You've clicked {counter} times" </h2>
      <button onClick={ () => {SetCounter(counter + 1)}}> Increment </button> <br />
      <button onClick={ () => {SetCounter(counter - 1)}}> Decrement </button> <br />
      <button onClick={ () => {SetCounter(0)}}> Reset  </button> <br />

    </div>
  );
}

export default App;
