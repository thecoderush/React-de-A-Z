import {useState} from 'react'
import Item from './Item'
import {v4 as uuidv4} from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coder avec React", id: uuidv4()},
    ])
    // console.log(uuidv4());

    const [stateInput, setStateInput] = useState()

    const linkedInput = event => {
        // console.log(event)
        setStateInput(event)
    }

    const addTodo = event => {
        event.preventDefault()
        
        const newArr = [...dataArr]
        const newTodo = {}

        newTodo.txt = stateInput
        newTodo.id = uuidv4()
        
        newArr.push(newTodo)
        setDataArr(newArr)
        
        setStateInput('')
    }

    const deleteElement = id => {
        // console.log(id)
        const filterdState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filterdState)
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={event => addTodo(event)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="todo" onInput={event => linkedInput(event.target.value)} 
                    value={stateInput}/>
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map((item, index) => {
                    return (
                        <Item txt={item.txt} key={item.id} id={item.id} delFunc={deleteElement} />
                    )
                })}
            </ul>
        </div>
    )
}