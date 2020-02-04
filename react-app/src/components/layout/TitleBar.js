import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TitleBar = ({ title }) => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: './clocks.jpg',
        fontFamily: 'Roboto Mono, monospace',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1
        style={{
          color: 'white',
          fontSize: '100px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {title}
      </h1>
    </div>
    // <nav
    //   className="navbar bg-primary"
    //   style={{ fontFamily: 'Roboto Mono, monospace' }}
    // >

    // </nav>
  );
};

TitleBar.defaultProps = {
  title: 'Time clock'
};

export default TitleBar;
