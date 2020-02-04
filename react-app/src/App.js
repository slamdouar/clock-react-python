import React, { useState, useRef, useEffect } from 'react';
import TitleBar from './components/layout/TitleBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDown from './components/CountDown';
import StopWatch from './components/StopWatch';
import Alarm from './components/Alarm';

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

const App = () => {
  return (
    <div className="app">
      <TitleBar title="Time-clock" />
      <hr
        style={{
          borderTop: '10px solid',
          color: 'white'
        }}
      ></hr>
      <Alarm />
      <div
        className="container"
        style={{
          fontFamily: 'Roboto Mono, monospace',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <CountDown />
        <StopWatch />
      </div>
    </div>
  );
};

export default App;
