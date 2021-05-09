import React from 'react'

function MemoContent(props) {
    console.log("Memo mise à jour");
    
    const memoContentStyle = {
        padding: "12px 15px",
        border: "1px solid Teal",
        maxWidth: "400px",
        margin: "25px auto 25px"
    }
    
    return (
        <div style={memoContentStyle}>
            <h1>{props.num}</h1>
            <h1>{props.arr}</h1>
        </div>
    )
}

export default React.memo(MemoContent)