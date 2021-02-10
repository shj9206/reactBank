import React from 'react';
import BankTemplate from '../components/bank/BankTemplate';
import BankHeadContainer from '../containers/bank/BankHeadContainer';
import BankListContainer from '../containers/bank/BankListContainer';

const BankAddPage = () => {
    return (
        <BankTemplate>
            <BankHeadContainer />
            <BankListContainer />
        </BankTemplate>
    );
};

export default BankAddPage;
