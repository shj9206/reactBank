/* eslint-disable */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import TransferPage from './pages/TransferPage';
import BankAddPage from './pages/BankAddPage';
import HeaderContainer from './containers/common/HeaderContainer';
import AccountPage from './pages/AccountPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <HeaderContainer />

                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/LogIn" component={LoginPage} />
                    <Route path="/SignUp" component={SignUpPage} />
                    
                   
                    <Route path="/Transfer/:id" component={TransferPage} />
                    <Route path="/BankAdd" component={BankAddPage} />
                    <Route path="/Account" component={AccountPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
