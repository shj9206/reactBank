/* eslint-disable */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
  
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/LogIn"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/LogIn"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/SignUp"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/LogIn" component={Login} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;