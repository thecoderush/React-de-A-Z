import { useState, useEffect } from "react";

function Timer() {
    const [timer, setTimer] = useState(1);

    // setInterval(() => {
    //   setTimer(timer+1)
    // }, 1000)

    useEffect(() => {
        const intervalID = setInterval(() => {
            // setTimer(timer+1)
            // console.log(timer)
            setTimer((timer) => timer + 1);
        }, 3000);

        return () => {
            alert("Composant détruit !");
            clearInterval(intervalID);
        };
    }, []);

    return (
        <>
            <h1>Timer state : {timer}</h1>
        </>
    );
}

export default Timer;
