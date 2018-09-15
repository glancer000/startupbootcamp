import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li><a href="/">How It Works</a></li>
      <li><a href="/">Get Started</a></li>
      <li><a href="/">About Us</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
