import React, {useEffect, useState} from 'react';
import useInterval from '../../CustomsHooks/useInterval';


const Timer = () => {

    const [delay, setDelay] = useState(1000);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(12);
    const [isRunning, setIsRunning] = useState(true)

    useInterval(() => {
        // Format timer title
        const secondsTimer = seconds >= 10 ? seconds : "0" + seconds;
        document.title = JSON.stringify(`Time left -> ${minutes} : ${secondsTimer}`);

        if(seconds > 0){
            setSeconds(seconds - 1);
        }
        if(seconds === 0){
            if(minutes === 0){
                setIsRunning(false)
                document.title =  "Time out !!!";
            }
            else{
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }

    },
        // handle timer delay
        isRunning ? delay : null
    );

    return (
        <div>
            <h1>Time Remaining : {minutes}:{seconds >= 10 ? seconds : "0" + seconds}</h1>
            <div>

            </div>
        </div>
    );
}
 
export default Timer;