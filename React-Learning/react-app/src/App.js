import {useState} from 'react'
import Random from './Random.js'
import Title from './Title.js'
import './index.css'
import Item2 from './Components/Item/Item2'
import Ternary from './Ternary.js'


function App() {



  console.log("Mise à jour!")

  const initialMessageState= "Hello react-app!"
  const number = "20"

  const [messageState, setMessageState] = useState(initialMessageState)

  console.log(useState)
  console.log(useState("Hello react-app!"))
  console.log(messageState)

  
  const modifyState = (data) => {
    // setMessageState(secondState1)
    console.log(data)
    setMessageState(data)
  }
  

  const initialDateState = "01/05/21"

  const [dateState, setDateState] = useState(initialDateState)


  const [inputData, setInputData] = useState("initial input state value")

  const modifyInput = (event) => {
    console.log("It's the input")
    console.log(event)
    setInputData(event)
  }

  console.log(inputData)


  const [toggle, setToggle] = useState(true)

  const modifyToggle = () => {
    setToggle(!toggle)
  }
 
  let toggleContenu
  
  if(toggle){
    toggleContenu = <h1>Contenu if toogle est true</h1>
  } else {
    toggleContenu = <h1>Contenu if toogle est false</h1>
  }

  if(toggle) {

    return (
      <div className="App">
        <Title dateState={dateState}/>
        
        <h2>This is my state : {messageState}</h2>
        <button onClick={modifyState} >Change le state from App.js</button>
        
        <Random date={messageState} function={modifyState}/>
  
        <h1>Hello depuis App</h1>
        <Item2 />
  
        <input type="text" value={inputData} onInput={event => modifyInput(event.target.value)}/>
      
        <h1>Le toggle state est true</h1>
        <button onClick={modifyToggle}>modify toggle</button>
        {toggleContenu}

        <Ternary />

      </div>
    )
    
  } else if(!toggle) {

    return (
      <div className="App">
        <Title dateState={dateState}/>
        
        <h2>This is my state : {messageState}</h2>
        <button onClick={modifyState} >Change le state from App.js</button>
        
        <Random date={messageState} function={modifyState}/>
  
        <h1>Hello depuis App</h1>
        {/* <Item2 /> */}
  
        <input type="text" value={inputData} onInput={event => modifyInput(event.target.value)}/>
      
        <h1>Le toggle state est false</h1>
        <button onClick={modifyToggle}>modify toggle</button>
        {toggleContenu}

        <Ternary />

      </div>
    )
    
  }

}

export default App

  //  return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null, 'Hello World!'
  //   )
  //    )
