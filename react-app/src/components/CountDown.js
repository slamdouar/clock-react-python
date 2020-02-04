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

const Countdown = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const startTimer = () => {
    setTimerOn(true);
  };

  useInterval(() => {
    if (timerOn === true) {
      const newTime = timerTime - 10;
      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        setTimerOn(false);
        alert("Time's Up!");
      }
    }
  }, 10);

  const stopTimer = () => {
    setTimerOn(false);
  };
  const resetTimer = () => {
    if (timerOn === false) {
      setTimerTime(timerStart);
    }
  };

  const adjustTimer = input => {
    if (!timerOn) {
      if (input === 'addHours' && timerTime + 3600000 < 216000000) {
        setTimerTime(timerTime + 3600000);
      } else if (input === 'minHours' && timerTime - 3600000 >= 0) {
        setTimerTime(timerTime - 3600000);
      } else if (input === 'addMinutes' && timerTime + 60000 < 216000000) {
        setTimerTime(timerTime + 60000);
      } else if (input === 'minMinutes' && timerTime - 60000 >= 0) {
        setTimerTime(timerTime - 60000);
      } else if (input === 'addSeconds' && timerTime + 1000 < 216000000) {
        setTimerTime(timerTime + 1000);
      } else if (input === 'minSeconds' && timerTime - 1000 >= 0) {
        setTimerTime(timerTime - 1000);
      }
    }
  };

  //const { timerTime, timerStart, timerOn } = state;
  let seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  let minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2);
  let hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2);

  return (
    <div
      className="Countdown"
      style={{
        fontFamily: 'Roboto Mono, monospace',
        alignItems: 'center',
        //display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div className="Countdown-header" style={{ color: 'white' }}>
        Countdown
      </div>
      <div className="Countdown-label" style={{ color: 'white' }}>
        Hours : Minutes : Seconds
      </div>
      <div className="Countdown-display" style={{ color: 'white' }}>
        <button onClick={() => adjustTimer('addHours')}>&#8679;</button>
        <button onClick={() => adjustTimer('addMinutes')}>&#8679;</button>
        <button onClick={() => adjustTimer('addSeconds')}>&#8679;</button>

        <div className="Countdown-time">
          {hours} : {minutes} : {seconds}
        </div>

        <button onClick={() => adjustTimer('minHours')}>&#8681;</button>
        <button onClick={() => adjustTimer('minMinutes')}>&#8681;</button>
        <button onClick={() => adjustTimer('minSeconds')}>&#8681;</button>
      </div>

      <button className="Button-start" onClick={startTimer}>
        Start
      </button>

      <button className="Button-stop" onClick={stopTimer}>
        Stop
      </button>

      <button className="Button-reset" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default Countdown;
