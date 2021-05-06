import {useState, useEffect, useRef} from 'react'

export default function ToggleArr() {
    
    const [toggleArr, setToggleArr] = useState([1,2,3])
    
    const changeToggleArr = () => {
        // setToggleArr(toggleArr+1)
        
        // toggleArr.push(4)
        // console.log(toggleArr);
        // setToggleArr(toggleArr)
        
        const newArr = [...toggleArr]
        newArr.push(4)
        setToggleArr(newArr)
    } 

    return (
        <>
            <h1>{toggleArr}</h1>
            <button onClick={changeToggleArr}>Change Toggle array</button>
        </>
    )
}
