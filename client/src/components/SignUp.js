/* eslint-disable */
import React, {useState, useHistory} from "react";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import qs from 'qs';
import {withRouter} from 'react-router-dom';

const history = useHistory();

function SingUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ID, setID] = useState('');
    const [pw, setPw] = useState('');
    
    

    const createMember=(e)=>{
       
        e.preventDefault();
        const member ={
            
            name : name,
            email : email,
            ID : ID,
            pw : pw,
        }
        console.log(member);
         axios.post('/addMember',qs.stringify(member))
         .then((result)=>{
            console.log(result);
            history.push('/');
            })
         .catch((err)=>{console.log(err)})
    }

       
  
    
        return (
            <form onSubmit={createMember}>
                <h3>Register</h3>

                <div className="form-group">
                    <TextField id="standard-basic" label="Name" name="name" onChange={e =>setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" label="Email" name="email" onChange={e =>setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" label="ID" name="ID" onChange={e =>setID(e.target.value)}/>    
                </div>

                <div className="form-group">
                    <TextField id="standard-basic" label="Password" name="pw" onChange={e =>setPw(e.target.value)}/>    
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>

            
        );
    }
    export default withRouter(SingUp);



  