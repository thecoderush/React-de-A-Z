import {useState} from 'react'

function List() {

    const [dataArray, setDataArray] = useState([
        {nom: "Juliette"},
        {nom: "John"},
        {nom: "Joris"}
    ])

    return (
        <div className='list'>
            {[<h1>My List</h1>]}
            {dataArray.map((item, index) => {
                console.log(index);
                return <h3 key={index}>Nom : {item.nom}</h3>
            })}
        </div>
    )
}

export default List