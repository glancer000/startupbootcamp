import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Feature from '../feature/Feature';
import './features.css';


const Features = () => (
  <div className="container">
    <div className="features__content">
      <h1>Get your vision on the right path</h1>
      <p>a 10 week program that will help mold your idea into a business</p>
    </div>
    <div>
      <Feature/>
      <Feature/>
      <Feature/>
      <Feature/>
      <Feature/>
      <Feature/>
    </div>

  </div>
);

export default Features;