import {useState} from 'react'

function Item(props) {

    console.log(props)

    
    const [itemState, setitemState] = useState("Item state!")

    return (
        <>
            <h3>{props.txt}</h3>
            <button onClick={props.function}>modifyState1</button>
            <button onClick={() => props.function(itemState)}></button>
        </>
    )
}

export default Item