import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import RoundButton from '../../../components/RoundButton/RoundButton';

const Header = () => (
  <div className="header">
    <div className="header__info">
      <h1>Build your startup from the ground up.</h1>
      <p>Get matched up with other developers with complelemtory skills to create a team. 
        Work together to build something amazing. Put it on your Resume and get hired.</p>
      <RoundButton style=""/>
    </div>
    
  </div>
);

export default Header;