import {useState, useEffect} from 'react'
import './App.css';

function App() {
  
  const [dataComponent, setDataComponent] = useState(1)

  useEffect(() => {
    console.log("dataComponent changed")
  }, [dataComponent])  

  const changeState = () => {
    setDataComponent(dataComponent+1)
  }

  return (
    <div className="App">
      <h1>Le state est {dataComponent}</h1>
       <button onClick={changeState}>Increment state</button>
    </div>
  );
}

export default App;
