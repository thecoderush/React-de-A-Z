import {useState} from 'react'
 
function Ternary() {
    
    const [toggle, setToggle] = useState(true)

    const modifyToggle = () => {
        setToggle(!toggle)
    } 

    let toggleContenu 

    return (
        <>
            {toggle ? 
                <h1>Content from Ternary component when toogle is true</h1>
                :
                <h1>Content from Ternary component when toogle is false</h1>
            }
            {toggle && <h1>Short circuit operator</h1>} 
            <button onClick={modifyToggle}>Modify toggle from Ternary.js component </button>
        </>
    )
}

export default Ternary