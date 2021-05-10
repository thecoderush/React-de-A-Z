import React from "react";
import Chevron from "./chevron.svg";
import "./Accordion.css";

export default function Accordion() {
    return (
        <>
            <div className="accordion">
                <div className="accordion-visible">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <img src={Chevron} alt="chevron down" />
                </div>
                <div className="accordion-toggle">
                    <p>
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
