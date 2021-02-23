import React from 'react';
import styled from 'styled-components';

const AccountHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h2 {
        margin: 0;
        font-size: 20px;
        color: #343a40;
        font-weight: bold;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function AccountHead({ accounts }) {
  
    return (
        <AccountHeadBlock>
                <h2>
                    즐거운 금융 생활
                 </h2>   
               <div className="tasks-left">
                나의 계좌 : {accounts ? accounts.length : 0}
            </div>
        </AccountHeadBlock>
    );
}

export default React.memo(AccountHead);
