import React, {useState} from 'react';
import useInterval from '../../CustomsHooks/useInterval';

const Timer = () => {

    const [delay, setDelay] = useState(1000);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(25);
    const [isRunning, setIsRunning] = useState(false);

    const [inputMinutes, setInputMinutes] = useState('');
    const [inputSeconds, setInputSeconds] = useState('');

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

    const handleSubmitTimer = (e) => {
        e.preventDefault();
        setMinutes(inputMinutes);
        setSeconds(inputSeconds);
        setIsRunning(true);
    }

    return (
        <div>
            <h2>Time Remaining : {minutes}:{seconds >= 10 ? seconds : "0" + seconds} s</h2>
            <form onSubmit={handleSubmitTimer}>
                <input placeholder="minutes"  value={inputMinutes} onChange={(e) => setInputMinutes(e.target.value)}/>
                <input placeholder="seconds" value={inputSeconds} onChange={(e) => setInputSeconds(e.target.value)}/>
                <input type="submit" value="START" />
            </form>
        </div>
    );
}
 
export default Timer;