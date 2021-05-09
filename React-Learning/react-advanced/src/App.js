import { useState, useEffect, useMemo, useCallback } from "react"
import Timer from "./Timer"
import Video from "./Video"
import "./App.css"
import MultiRef from "./MultiRef"
import CatAPI from "./CatAPI"
import ToggleArr from "./ToggleArr"
import ChildProps from "./ChildProps"
import MemoContent from "./MemoContent"

function App() {
    const [dataComponent, setDataComponent] = useState(1)

    useEffect(() => {
        console.log("dataComponent changed")
    }, [dataComponent]);

    const changeState = () => {
        setDataComponent(dataComponent + 1)
    };

    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle)
    };

    useEffect(() => {
        window.addEventListener('resize', actionResize)

		function actionResize() {
			console.log("Resized !!")
		}

		return () => {
			window.removeEventListener('resize', actionResize)
		}
    }, [])


	const tableau = useMemo(() => {
		return [1,2,3,4,5,6] 
	}, [])

	const foo = useCallback(() => {
		console.log("click")
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

			<h2 style={{marginTop: "50px"}}>My toggle array : </h2>
			<ToggleArr />

			<h2 style={{marginTop: "50px"}}>My content : </h2>
			<ChildProps>
				<h1>Titre de mon article 1</h1>
				<p>Lorem ipsum dolor sit amet.</p>
			</ChildProps>

			<ChildProps>
				<h1>Titre de mon article 2</h1>
				<p>Lorem ipsum dolor sit amet.</p>
			</ChildProps>

			<ChildProps>
				<h1>Titre de mon article 3</h1>
				<p>Lorem ipsum dolor sit amet.</p>
			</ChildProps>
			<button onClick={changeToggle}>Change toogle state</button>

			<h2 style={{marginTop: "50px"}}>My primitive value : </h2>
			<MemoContent num={5} />
			<h2 style={{marginTop: "50px"}}>My value by reference : </h2>
			<MemoContent arr={tableau} />
			<h2 style={{marginTop: "50px"}}>My function : </h2>
			<MemoContent func={foo} />
      </div>
  	);
}

export default App;
