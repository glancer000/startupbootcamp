import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const PageNotFound = () => (
  <div>
    404 - <Link to="/"> home </Link>
  </div>
);

export default PageNotFound;