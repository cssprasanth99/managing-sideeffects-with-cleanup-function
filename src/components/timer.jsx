import { useEffect,useState } from "react";

function Timer() {
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);

    useEffect(() => {
         const timerId = setInterval(() => {
            console.log('Timer tick');
            setSeconds(seconds + 1);

            if(seconds > 59){
                setMinutes(minutes + 1);
                setSeconds(0);
            }

        }, 1000);

        return () => {
            console.log("I am Cleaning");
            clearInterval(timerId); // Cleanup function to clear the timer when the component unmounts
        };
    }); // Run the effect only once when the component mounts
  
    const reset = ()=>{
        setSeconds(0);
        setMinutes(0);
    }


    return (
      <div>
        <h3>{minutes < 10 ? "0" + minutes :minutes}:{seconds<10?"0"+seconds:seconds}</h3>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  

export default Timer;