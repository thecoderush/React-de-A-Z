import {useState, useEffect} from 'react'
import Timer from './Timer'
import './App.css';

function App() {
  
  const [dataComponent, setDataComponent] = useState(1)

  useEffect(() => {
    console.log("dataComponent changed")
  }, [dataComponent])  

  const changeState = () => {
    setDataComponent(dataComponent+1)
  }

  const [dataImg, setDataImg] = useState()

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log(data);
        setDataImg(data[0].url)
      })
  }, [])

  
  const [toggle, setToggle] = useState(false)

  const changeToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <h1>Le state est {dataComponent}</h1>
      <button onClick={changeState}>Increment state</button>
      <br/>
      {dataImg && 
        <img 
          src={dataImg} 
          alt="cat image" 
          style={{width: "500px", marginTop: "50px"}}
        /> 
      }
      {/* <Timer /> */}

      <button onClick={changeToggle}>Change toogle state</button>
      <h2>{toggle ? "True" : "False"}</h2>

      {toggle && <Timer />}
    </div>
  );
}

export default App;
