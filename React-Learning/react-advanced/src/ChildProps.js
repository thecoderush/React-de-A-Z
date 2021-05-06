import React from 'react'

export default function ChildProps(props) {

    console.log(props);

    const childPropsStyle = {
        padding: "12px 15px",
        border: "1px solid Teal",
        maxWidth: "400px",
        margin: "0 auto 25px"
    }

    return (
        <div style={childPropsStyle}>
            {props.children}
        </div>
    )
}
