import {useState} from 'react'
import Random from "./Random.js"
import Title from "./Title.js"

function App() {

  console.log("Mise à jour!")

  const initialState1= "Hello react-app!"
  const secondState1 = "20"

  const [myState1, setmyState1] = useState(initialState1)

  console.log(useState)
  console.log(useState("Hello react-app!"))
  console.log(myState1);

  
  const modifyState1 = (data) => {
    // setmyState1(secondState1)
    console.log(data)
    setmyState1(data)
  }
  

  const initialState2 = "01/05/21"

  const [myState2, setmyState2] = useState(initialState2)


  return (
    <div className="App">
      <Title date={myState2}/>
      
      <h2>This is my state : {myState1}</h2>
      <button onClick={modifyState1} >Change le state from App.js</button>
      
      <Random date={myState1} function={modifyState1}/>
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
