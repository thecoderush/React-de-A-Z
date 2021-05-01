import {useState} from 'react';
import Random from "./Random.js";
import Title from "./Title.js";

function App() {

  
  const [myState, setmyState] = useState("Hello react-app!")
  console.log(useState)
  console.log(useState("Hello react-app!"));
  console.log(myState);

  return (
    <div className="App">
      <Title />
      <Random />
      {myState}
    </div>
  );
}

export default App;

  //  return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null, 'Hello World!'
  //   )
  //    )
