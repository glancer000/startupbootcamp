import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import RoundButton from '../RoundButton/RoundButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            
            <div className="toolbar__logo"><a href="/"><h1>Embryo</h1></a>
            </div>
            <div className="toolbar_navigation-items">
                <NavLink to="/" activeClassName="is-active" exact={true}>How it Works</NavLink>
                <NavLink to="/about" activeClassName="is-active">Schedule</NavLink>
                <NavLink to="/about" activeClassName="is-active">Partners</NavLink>
            </div>
            <div className="spacer" />
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <RoundButton/>
        </nav>
    </header>
);

export default toolbar;
