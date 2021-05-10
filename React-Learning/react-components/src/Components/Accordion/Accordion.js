import React, {useState, useRef, useEffect} from "react";
import Chevron from "./chevron.svg";
import "./Accordion.css";

export default function Accordion() {

    const [toggle, setToggle] = useState(false)
    const [heightElement, setHeightElement] = useState()

    const toggleFunc = () => {
        setToggle(!toggle)
    }

    const refHeight = useRef()

    useEffect(() => {
        setHeightElement(`${refHeight.current.scrollHeight}px`)
    },[])

    return (
        <>
            <div className="accordion">
                <div
                    onClick={toggleFunc} 
                    className="accordion-visible">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <img src={Chevron} alt="chevron down" />
                </div>
                <div 
                    ref={refHeight} 
                    className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
                    style={{height: toggle ? `${heightElement}` : "0px"}}
                    >
                    <p aria-hidden={toggle ? "true" : "false"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                        quis aliquid reiciendis vel ipsam, quam qui quas eligendi quisquam
                        laudantium illo eius, dignissimos expedita distinctio quibusdam
                        commodi, illum quaerat! Mollitia?
                    </p>
                </div>
            </div>
        </>
    );
}
