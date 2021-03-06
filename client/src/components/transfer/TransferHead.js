import React from 'react';
import styled from 'styled-components';

const AccountHeadBlock = styled.div`
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h2 {
        margin: 0;
        font-size: 24px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 10px;
        font-weight: bold;
    }
`;

function TransferHead({ accounts, error, loading }) {
    
    

    return (
        <AccountHeadBlock>
            {!loading && accounts && (
                <div>
                    
                        <div className="tasks-left">
                        나의 은행 : {accounts.bankname}은행<br/>
                        나의 계좌 : {accounts.accountNo}<br/>
                        나의 잔액 : {accounts.cash}원<br/>
                        </div> 
                        
                    
               
            </div>
            )}
           
        </AccountHeadBlock>
    );
}

export default React.memo(TransferHead);
