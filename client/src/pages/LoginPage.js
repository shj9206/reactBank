import React from 'react';
import LogInBox from '../containers/auth/LogInBox';

const LoginPage = () => {
    return (
        <>
            <div className="outer">
                <div className="inner">
                    <LogInBox />
                </div>
            </div>
        </>
    );
};

export default LoginPage;
