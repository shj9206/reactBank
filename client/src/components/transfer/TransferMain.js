import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const TransferHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 150px;
    //border-bottom: 1px solid #e9ecef;
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
        margin-top: 40px;
        font-weight: bold;
    }
`;


function TransferMain({form, onChange, onBack, onSend}) {
    
  
    return (
        <TransferHeadBlock>
            <form>
                <TextField
                    autoComplete="bankname"
                    label="받는 은행"
                    name="bankname"
                    onChange={onChange}
                    value={form.bankname}
                />
                <p />

                <TextField
                    autoComplete="receiveAccountNo"
                    label="받는 계좌"
                    name="receiveAccountNo"
                    onChange={onChange}
                    value={form.receiveAccountNo}
                />
                <p />
                
                <TextField
                    autoComplete="cash"
                    label="보내는 금액"
                    name="cash"
                    onChange={onChange}
                    value={form.cash}
                />
                <p />

                <Button color="primary" onClick={onSend}>송금</Button>
                {/* <Button color="secondary" onClick={onBack}>취소</Button> */}
            </form>
            
        </TransferHeadBlock>
    );
}

export default TransferMain;