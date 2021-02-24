import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const TransferLogHeadBlock = styled.div`
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    display : flex;
    h2 {
        margin: 0;
        font-size: 18px;
        color: #343a40;
    }
    .button {
        font-size: 15px;
        text-align : right;
        
    }
    .tasks-left {
        font-size: 13px;
        margin-top: 35px;
        border-bottom: 1px solid #e9ecef;
    }
`;

function TransferLogHead({ accounts, error, loading, onTransfer }) {
    
    
    

    return (
        <TransferLogHeadBlock>
            {!loading && accounts && (
                <div>
                    
                        <div className="tasks-left">
                        {accounts.bankname}은행{accounts.accountNo}
                        </div> 
                        <div className="h2">
                            {accounts.cash}원
                        </div>
                        <Button variant="contained" color="primary" className="button" onClick={onTransfer}>
                            송금
                        </Button>
                        
                    
               
            </div>
            )}
           
        </TransferLogHeadBlock>
    );
}

export default React.memo(TransferLogHead);
