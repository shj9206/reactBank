import React from 'react';
import BankTemplate from '../components/bank/BankTemplate';
import AccountHeadContainer from '../containers/account/AccountHeadContainer';
import AccountListContainer from '../containers/account/AccountListContainer';

const AccountPage = () => {
    return (
        <BankTemplate>
            <AccountHeadContainer />
            <AccountListContainer />
        </BankTemplate>
    );
};

export default AccountPage;
