import { useState, useEffect } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(null);
  var counterTimer;

  useEffect(() => {
    if (stop == false) {
      counterTimer = setInterval(() => setCount((pre) => pre + 1), 1000);
    }

    return () => clearInterval(counterTimer);
  });

  const handleStart = () => {
    setStop(false);
  }
  const handleStop = () => {
    setStop(true);
  }
  const handleReset = () => {
    setCount(0);
    setStop(true);
  }

  return (<div>
    <h2>Count {count}</h2>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
  </div>)
}



export default Contact;