import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { IoLogoBitcoin } from 'react-icons/io'

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;
const Transfer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: blue;
    }
    display: none;
`;

const AccountItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        
        /* 마우스를 'AccountItemBlock'에 올렸을때 Remove 컴포넌트를 보여주라는 의미 */
        ${Remove} {
            display: initial;
            
        }
        ${Transfer} {
            display: initial;
            
        }
    }
`;

const TextBankName = styled.div`
    flex: 1;
    font-size: 17px;
    font-weight : bold;
    text-align: left;
    color: #495057;
`;

// const TextAccount = styled.div`
//     flex: 1;
//     font-size: 15px;
//     color: #495057;
// `;



function AccountItem({ account, onRemove, onTransfer }) {
    const { _id, bankname, accountNo, cash } = account;
    return (
        <AccountItemBlock>
            <TextBankName>{bankname}<br/>{accountNo}<br/>{cash}원</TextBankName>
            
            <Transfer onClick={() => onTransfer(_id)}>
                <IoLogoBitcoin />
            </Transfer>
            
            <Remove onClick={() => onRemove(_id)}>
                <MdDelete />
            </Remove>

            
        </AccountItemBlock>
    );
}

export default React.memo(AccountItem);
