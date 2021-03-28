/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { GrMoney } from 'react-icons/gr';
import TextField from '@material-ui/core/TextField';
import GoogleLogin from 'react-google-login';

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

 const responseGoogle = (response) =>{
    console.log(response);
    console.log(response.profileObj);


};

const LogInForm = ({ form, onChange, onSubmit, error }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>
                    <GrMoney />
                </h3>
                <h3>BANK</h3>
                <p className="create-id text-center">
                    아직 계정이 없으십니까? <a href="/SignUp">가입하기</a>
                </p>

                <TextField
                    autoComplete="username"
                    label="ID"
                    name="username"
                    onChange={onChange}
                    value={form.username}
                />
                <p />
                <TextField
                    autoComplete="new-password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                <p />
                <p />
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                        >
                            Remember me
                        </label>
                    </div>
                </div>
                <p />
                <p />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <button className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <GoogleLogin
                    clientId="6191335277-0kjtvciktcptqnrrjd7uspng93100g37.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </form>
        </div>
    );
};
export default LogInForm;
