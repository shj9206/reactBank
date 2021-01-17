/* eslint-disable */
import React from "react";
import { GrMoney } from 'react-icons/gr';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

 


function LogIn() {
    
        return (
            <div>
            <form>

                <h3><GrMoney/></h3>
                <h3>BANK</h3>
                
                <TextField id="standard-basic" label="ID" />
                <p/>
                <TextField id="standard-basic" label="Password" />
                <p/>
            
                

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <p/>
                <p/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        );
    }
    export default LogIn;