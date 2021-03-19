/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { GrMoney } from 'react-icons/gr';
import TextField from '@material-ui/core/TextField';
import KaKaoLogin from 'react-kakao-login'

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;
const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;



const LogInForm = ({ form, onChange, onSubmit, error, onSuccess,onFailure }) => {
    
   
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
                    <KaKaoBtn
                    //styled component 통해 style을 입혀 줄 예정 
                    jsKey={'37aee25725910fccaeffb2c6c1ba880b'}
                    //카카오에서 할당받은 jsKey를 입력
                    buttonText='카카오 계정으로 로그인'
                    //로그인 버튼의 text를 입력
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장 
                    getProfile={true}
                />
            </form>
        </div>
    );
};
export default LogInForm;
