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

  const [timer, setTimer] = useState(1)

  // setInterval(() => {
  //   setTimer(timer+1)
  // }, 1000) 

  useEffect(() => {
    const intervalID = setInterval(() => {
      // setTimer(timer+1)
      // console.log(timer)
      setTimer(timer => timer+1)
    }, 3000) 

    return () => {
      clearInterval(intervalID)
    }
  }, [])

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
      <h1>Timer state : {timer}</h1>
    </div>
  );
}

export default App;
