import Item from "./Item"

function Random ({date}) {
    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <br/>
            <button>Random button</button>
            {true ? 1000 : "abc"}
            <Item txt={"Hello France!"}/>
            <Item txt={"Hello Italy!"}/>
            <Item txt={"Hello USA!"}/>
            <h6>This is myState1 duplicated in Random.js component: {date}</h6>
        </div>
    )
}

export default Random