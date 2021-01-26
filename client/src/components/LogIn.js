/* eslint-disable */
import React,{useState} from "react";
import { GrMoney } from 'react-icons/gr';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function LogIn() {

   


        return (
            <div>
            <form>

                <h3><GrMoney/></h3>
                <h3>BANK</h3>
                <p className="create-id text-center">
                    아직 계정이 없으십니까? <a href="/signUp">가입하기</a>
                </p>
                
                <TextField id="standard-basic" label="ID" name="ID"  onChange={e =>setID(e.target.value)}/>
                <p/>
                <TextField id="standard-basic" label="Password" name="pw" onChange={e =>setPw(e.target.value)}/>
                <p/>
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