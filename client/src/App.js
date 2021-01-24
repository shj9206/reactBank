/* eslint-disable */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import MyAccount from "./components/MyAccount";
import BankTransfer from "./components/BankTransfer";


function App() {
  return (
  
  <Router>
    <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Main/:id">Main</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="TEST용 이동" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/MyAccount">MyAccount</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/BankTransfer">송금</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
       </Navbar>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/LogIn" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Main/:id" component={Main} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/BankTransfer" component={BankTransfer} />
            
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;