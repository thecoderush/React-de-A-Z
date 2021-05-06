import { useRef, useEffect } from "react";
import PexelsVid2 from "./Pexels2.mp4";

export default function MultiRef() {
    const ref = useRef([]);

    const addToRef = element => {
        // console.log(element);
        if(element && !ref.current.includes(element)) {
            ref.current.push(element)
        }
    }

    useEffect(() => {
        console.log(ref);
    }, []);

    return (
        <>
            <video ref={addToRef} width="450" height="300" autoPlay controls muted>
                <source src={PexelsVid2} type="video/mp4" />
            </video>

            <br/>

            <video ref={addToRef} width="450" height="300" autoPlay controls muted>
                <source src={PexelsVid2} type="video/mp4" />
            </video>

            <br/>

            <video ref={addToRef} width="450" height="300" autoPlay controls muted>
                <source src={PexelsVid2} type="video/mp4" />
            </video>
        </>
    );
}



