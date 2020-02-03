import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
    const exampleSocket = new WebSocket('ws://127.0.0.1:8080');
    exampleSocket.onmessage = e => {
      this.setState({ time: e.data });
    };
  }

  render() {
    return (
      <div className="app">
        <Navbar title="Time-clock" />
        <div className="container">
          <h1>{this.state.time}</h1>
        </div>
      </div>
    );
  }
}

export default App;
