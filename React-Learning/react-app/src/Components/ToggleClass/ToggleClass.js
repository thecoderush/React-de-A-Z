import {useState} from 'react'
import './ToggleClass.css'

function ToggleClass() {
    
    const [toggle, setToggle] = useState(false)

    const modifyToggle = () => {
        setToggle(!toggle)
    }
    
    return (
        <div className='toggleClass'>
            <h1 style={{backgroundColor: toggle ? "pink" : "lightblue"}}>Content from ToggleClass component</h1>
            <div className={toggle ? "box animated" : "box"}></div>
            <button onClick={modifyToggle}>Modify toggle from ToggleClass</button>
        </div>
    )
}

export default ToggleClass