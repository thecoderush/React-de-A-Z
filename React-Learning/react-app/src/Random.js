import Item from "./Item";

function Random () {
    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <br/>
            <button>Changer le state</button>
            {true ? 1000 : "abc"}
            <Item />
        </div>
    )
}

export default Random;