import React from 'react';
import './styles.css';

import logo from './assets/logo.svg';
import iphoneHome from './assets/iphone1.png';

function App() {
  return (
    <div className="mainContainer">
      <div className="header">
        <img className="logo" src={logo} alt="iParking logo"/>
        <div className="headerItems">
          <h4 className="headerItem">About</h4>
          <h4 className="headerItem">Features</h4>
          <h4 className="headerItem">Download</h4>
        </div>
      </div>
      <div className="home">
        <img className="iphoneHome" src={iphoneHome} alt="Iphone homepage"/>
        <h1 className="homeTitle">a solution for Smart Parkings</h1>
      </div>
      <div className="about">

      </div>
    </div>
  );
}

export default App;
