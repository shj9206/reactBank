import React from 'react';
import AccountHeadContainer from '../containers/account/AccountHeadContainer';
import AccountListContainer from '../containers/account/AccountListContainer';

const AccountPage = () => {
    return (
        <>
            <div className="outer">
                <div className="inner2">
                    <AccountHeadContainer />
                    <AccountListContainer />
                </div>
            </div>
        </>
       
    );
};

export default AccountPage;
