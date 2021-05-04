import "./Item2.css"

function Item2() {

    const toggle = true
    const toggle2 = !true
    const styleCSS = {color: toggle2 ? "crimson" : "green", fontSize: "50px"}

    return (
        <>
            <h3 style={{color: toggle ? "crimson" : "green", fontSize: "50px"}}>Hello depuis Item2</h3>
            <h3 style={styleCSS}>Hello depuis Item2</h3>
            <h3 className="external-css-file">Hello depuis Item2</h3>
        </>
    )
}

export default Item2 