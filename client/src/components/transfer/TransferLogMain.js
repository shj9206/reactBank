import React from 'react';
import styled from 'styled-components';
import TransferLogItem from './TransferLogItem';


const TransferLogMainBlock = styled.div`
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    display : flex;
   
`;

function TransferLogMain({ accounts, loading, transferlogs }) {
    
    
    

    return (
        <TransferLogMainBlock>
            {!loading && accounts && transferlogs && (
                
                <div>
                    
                {transferlogs.map((transferlog) => (
                //    <>
                //     {accounts.accountNo === transferlogs.accountNo
                //     ?
                //       <TransferLogItem
                //         transferlog={transferlog}
                //         key={transferlog._id}
                //         /> 
                //     :
                //    "error" }
                //    </>
                     <TransferLogItem
                        transferlog={transferlog}
                        key={transferlog._id}
                        
                    />
                ))}
            </div>
            )}
           
        </TransferLogMainBlock>
    );
}

export default React.memo(TransferLogMain);
