import React from 'react';
// import TransferHeadContainer from '../containers/transfer/TransferHeadContainer';
import TransferMainContainer from '../containers/transfer/TransferMainContainer';
import { useParams } from 'react-router-dom';


const TransferPage = () => {
    let { id } = useParams();
    
    const accountsId = id;
   
    
    return (
        
    <>
    <div className="outer">
        <div className="inner2">
            {/* <TransferHeadContainer accountsId={accountsId}/> 사용하지 않음*/}
            <TransferMainContainer accountsId={accountsId}/>
        </div>
    </div>
    </>
    );  
};

export default TransferPage;
