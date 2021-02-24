import React from 'react';
import AccountInforContainer from '../containers/account/AccountInforContainer';
import BankHeaderContainer from '../containers/common/BankHeaderContainer'

import { useParams } from 'react-router-dom';



const AccountInforPage = () => {
    let { id } = useParams();
    
    const accountsId = id;
   
    
    return (
        
    <>
    <div className="outer">
        <div className="inner2">
            <BankHeaderContainer accountsId={accountsId}/>
            <AccountInforContainer accountsId={accountsId}/> 
            
        </div>
    </div>
    </>
    );  
};

export default AccountInforPage;
