import './App.css';
import { useRef } from 'react'
import Drums from './components/Drums';

function App() {

  const firstRef = useRef();

  function handleChange() {
      firstRef.current.innerText="Dumebi is, like, the coolest dev that I know because wtf!!!!!!!"
  }

  return (
    <div className="App">
      <h1 ref={firstRef}
      onClick={handleChange}>
        Click ME!
      </h1>
      <Drums />
    </div>
  );
}

export default App;
