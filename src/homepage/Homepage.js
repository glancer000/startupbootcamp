import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import Features from './components/features/Features';


const HomePage = () => (
  <div className="homepage">
    <Header/>
    <Features/>
  </div>
);

export default HomePage;


