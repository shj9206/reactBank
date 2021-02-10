/* eslint-disable */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import MyAccountPage from './pages/MyAccountPage';
import BankTransferPage from './pages/BankTransferPage';
import BankAddPage from './pages/BankAddPage';
import HeaderContainer from './containers/common/HeaderContainer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <HeaderContainer />

                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/LogIn" component={LoginPage} />
                    <Route path="/SignUp" component={SignUpPage} />
                    <Route path="/Main" component={MainPage} />
                    <Route path="/MyAccount" component={MyAccountPage} />
                    <Route path="/BankTransfer" component={BankTransferPage} />
                    <Route path="/BankAdd" component={BankAddPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
