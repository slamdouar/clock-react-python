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

const Alarm = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarm] = useState('');
  var [alarmMessage, setAlarmMessage] = useState(
    'You can set your alarm here !'
  );
  const exampleSocket = new WebSocket('ws://127.0.0.1:8080');
  exampleSocket.onmessage = e => {
    setTime(e.data);
  };
  const setAlarmTime = event => {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ':00';
    setAlarm(inputAlarmTimeModified);
  };

  useInterval(() => {
    if (alarmTime === 'undefined' || !alarmTime) {
      setAlarmMessage('You can set your alarm here !');
    } else {
      setAlarmMessage('Your alarm is set for ' + alarmTime + '.');
      if (time === alarmTime) {
        alert('its time!');
      }
    }
  }, 1000);

  return (
    <div
      className="Alarm container"
      style={{
        fontFamily: 'Roboto Mono, monospace',
        alignItems: 'center',
        //display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        className="container"
        style={{
          fontFamily: 'Roboto Mono, monospace',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <h1 style={{ color: 'white', fontSize: '100px' }}>{time}</h1>
      </div>

      <h2 style={{ color: 'white' }}>{alarmMessage}</h2>
      <form>
        <input
          type="time"
          id="input_starttime"
          className="form-control timepicker"
          onChange={setAlarmTime}
        />
      </form>
    </div>
  );
};

export default Alarm;
