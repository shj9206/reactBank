import React from 'react';
import BankHeaderContainer from '../containers/common/BankHeaderContainer';
import TransferLogHeadContainer from '../containers/transfer/TransferLogHeadContainer';
import TransferLogMainContainer from '../containers/transfer/TransferLogMainContainer';
import { useParams } from 'react-router-dom';


const TransferLogPage = () => {
    let { id } = useParams();
    
    const accountsId = id;
   
    
    return (
        
    <>
    <div className="outer">
        <div className="inner2">
            <BankHeaderContainer accountsId={accountsId}/>
            <TransferLogHeadContainer accountsId={accountsId}/> 
            <TransferLogMainContainer accountsId={accountsId}/>
        </div>
    </div>
    </>
    );  
};

export default TransferLogPage;