import React from 'react';
import styled from 'styled-components';


const TransferLogMainBlock = styled.div`
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    display : flex;
   
`;

function TransferLogMain({ accounts, loading }) {
    
    
    

    return (
        <TransferLogMainBlock>
            {!loading && accounts && (
                <div>
                    
                        <div className="tasks-left">
                        {accounts.bankname}은행{accounts.accountNo}
                        </div> 
                        <div className="h2">
                            {accounts.cash}원
                        </div>
                        
                        
                    
               
            </div>
            )}
           
        </TransferLogMainBlock>
    );
}

export default React.memo(TransferLogMain);
