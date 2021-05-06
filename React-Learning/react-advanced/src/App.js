import { useState, useEffect } from "react";
import Timer from "./Timer";
import Video from "./Video";
import "./App.css";
import MultiRef from "./MultiRef";
import CatAPI from "./CatAPI";
import ToggleArr from "./ToggleArr";

function App() {
    const [dataComponent, setDataComponent] = useState(1);

    useEffect(() => {
        console.log("dataComponent changed");
    }, [dataComponent]);

    const changeState = () => {
        setDataComponent(dataComponent + 1);
    };

    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener('resize', actionResize)

		function actionResize() {
			console.log("Resized !!");
		}

		return () => {
			window.removeEventListener('resize', actionResize)
		}
    }, [])

  	return (
      	<div className="App">
          	<h1>Le state est {dataComponent}</h1>
          	<button onClick={changeState}>Increment state</button>
          	<br />
          	<CatAPI />
          	{/* <Timer /> */}
      
        	<br/>
        	<button onClick={changeToggle} style={{marginTop: "50px"}}>Change toogle state</button>
        	<h2>{toggle ? "True" : "False"}</h2>

          	{toggle && <Timer />}
      
          	<h2 style={{marginTop: "50px"}}>My first video :</h2>
          	<Video />
      
          	<h2 style={{marginTop: "50px"}}>Select array of elements : </h2>
          	<MultiRef />

			<ToggleArr />
      </div>
  	);
}

export default App;
