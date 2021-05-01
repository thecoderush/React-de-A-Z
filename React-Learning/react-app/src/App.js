import {useState} from 'react'
import Random from "./Random.js"
import Title from "./Title.js"

function App() {

  console.log("Mise à jour!")

  const initialState = "Hello react-app!"
  const secondState = "20"

  const [myState, setmyState] = useState(initialState)

  console.log(useState)
  console.log(useState("Hello react-app!"))
  console.log(myState);

  let state = true

  const modifyState = () => {
    setmyState(secondState)
  }

  return (
    <div className="App">
      <Title />
      <Random />
      <h1>This is my state : {myState}</h1>
      <button onClick={modifyState} >Change le state from App.js</button>
    </div>
  );
}

export default App

  //  return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null, 'Hello World!'
  //   )
  //    )
