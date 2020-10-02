import React from 'react';
import './styles.css';

import logo from './assets/logo.svg';
import iphoneHome from './assets/iphone1.png';
import card1 from './assets/card1.svg';
import card2 from './assets/card2.svg';
import card3 from './assets/card3.svg';
import sectionTitle from './assets/sectionTitle.svg';

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
        <div className="homeItems">
          <img className="iphoneHome" src={iphoneHome} alt="Iphone homepage"/>
          <h1 className="homeTitle">a solution for Smart Parkings</h1>
        </div>
        

      </div>
      <div className="cards">
          <div className="card">
            <img className="cardImage" src={card1} alt="card 1 image"/>
            <div>
              <h3 className="cardTitle">Multi-agent system</h3>
              <p className="cardDescription">Best spot for your needs</p>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={card2} alt="card 1 image"/>
            <div>
              <h3 className="cardTitle">Cloud based</h3>
              <p className="cardDescription">Fast and efficient</p>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={card3} alt="card 1 image"/>
            <div>
              <h3 className="cardTitle">Easy to use</h3>
              <p className="cardDescription">Very intuitive</p>
            </div>
          </div>
        </div>
      <div className="about">
        <div className="sectionHeader">
          <h2 className="sectionTitle">About App</h2>
          <img className="sectionSvg" src={sectionTitle} alt="section svg"/>
        </div>

      </div>
    </div>
  );
}

export default App;
