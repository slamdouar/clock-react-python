import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Stopwatch = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);

  const startTimer = () => {
    setTimerOn(true);
  };

  useInterval(() => {
    if (timerOn) {
      setTimerTime(Date.now() - timerStart);
    }
  }, 10);

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimerTime(0);
    setTimerStart(0);
  };

  let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
  let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);
  return (
    <div
      className="Stopwatch"
      style={{
        fontFamily: 'Roboto Mono, monospace',
        alignItems: 'center',
        //display: 'flex',
        justifyContent: 'center',
        color: 'white'
      }}
    >
      <div className="Stopwatch-header">Stopwatch</div>
      <div className="Stopwatch-display">
        {hours} : {minutes} : {seconds} : {centiseconds}
      </div>
      {timerOn === false && timerTime === 0 && (
        <button onClick={startTimer}>Start</button>
      )}
      {timerOn === true && <button onClick={stopTimer}>Stop</button>}
      {timerOn === false && timerTime > 0 && (
        <button onClick={startTimer}>Resume</button>
      )}
      {timerOn === false && timerTime > 0 && (
        <button onClick={resetTimer}>Reset</button>
      )}
    </div>
  );
};

export default Stopwatch;
