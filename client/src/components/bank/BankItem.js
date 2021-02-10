import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

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

const BankItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        /* 마우스를 'BankItemBlock'에 올렸을때 Remove 컴포넌트를 보여주라는 의미 */
        ${Remove} {
            display: initial;
        }
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
`;

function BankItem({ bank, onRemove }) {
    const { _id, bankname } = bank;
    return (
        <BankItemBlock>
            <Text>{bankname}</Text>
            <Remove onClick={() => onRemove(_id)}>
                <MdDelete />
            </Remove>
        </BankItemBlock>
    );
}

export default React.memo(BankItem);
