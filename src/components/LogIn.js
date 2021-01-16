/* eslint-disable */
import React from "react";
import { GrMoney } from 'react-icons/gr';

 


function LogIn() {
    
        return (
            <div>
            <form>

                <h3><GrMoney/></h3>
                <h3>BANK</h3>
                

                <div className="form-group">
                    <label>ID</label>
                    <input type="email" className="form-control" placeholder="Enter ID" />
                </div>

                    
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        );
    }
    export default LogIn;