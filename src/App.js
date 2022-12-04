import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react'
import Drums from './components/Drums';

function App() {

  const firstRef = useRef();

  function handleChange() {
      firstRef.current.innerText="Hello, Dumebi"
      console.log("Bitch, work!")
  }

  return (
    <div className="App">
      <h1 ref={firstRef}
      onClick={handleChange}>
        Hello world!
      </h1>
      <Drums />
    </div>
  );
}

export default App;
