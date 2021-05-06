import { useRef, useEffect } from "react";
import PexelsVid1 from "./Pexels1.mp4";

export default function Video(props) {
    const ref = useRef(null);

    console.log(ref);
    console.log(ref.current);

    useEffect(() => {
        setTimeout(() => {
            ref.current.pause();
        }, 3000);
    }, []);

    return (
        <>
            <video ref={ref} width="450" height="300" autoPlay controls muted>
                <source src={PexelsVid1} type="video/mp4" />
            </video>
        </>
    );
}
