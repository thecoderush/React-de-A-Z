import Item from "./Item"


function Random (props) {

    const myFunc = () => {}

    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <br/>
            <button>Random button</button>
            {true ? 1000 : "abc"}
            <Item txt={"Hello France!"} function={props.function}/>
            <Item txt={"Hello Italy!"} function={props.function}/>
            <Item txt={"Hello USA!"} function={props.function}/>
            <h6>This is myState1 duplicated in Random.js component: {props.date}</h6>
        </div>
    )
}

export default Random