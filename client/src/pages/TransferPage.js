import React from 'react';
import BankHeaderContainer from '../containers/common/BankHeaderContainer'
import TransferMainContainer from '../containers/transfer/TransferMainContainer';
import { useParams } from 'react-router-dom';


const TransferPage = () => {
    let { id } = useParams();
    
    const accountsId = id;
   
    
    return (
        
    <>
    <div className="outer">
        <div className="inner2">
            <BankHeaderContainer accountsId={accountsId}/>
            <TransferMainContainer accountsId={accountsId}/>
        </div>
    </div>
    </>
    );  
};

export default TransferPage;
