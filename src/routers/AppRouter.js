import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from '../homepage/Homepage';
import GetStarted from '../getstartedpage/GetStartedPage';
import Toolbar from '../components/Toolbar/Toolbar';
import React, { Component } from 'react';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class AppRouter extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        <Switch>
          <Route path="/" component={HomePage} exact={true}/>
          <Route path="/getstarted" component={GetStarted}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;