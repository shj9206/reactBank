import React from 'react';
import styled from 'styled-components';
import BankItem from './BankItem';

const BankListBlock = styled.div`
    flex: 1; /* 자신이 차지할 수 있는 모든영역은 커버하게됨 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    /* background: gray;  사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

const BankList = ({ loading, error, banks, onRemove }) => {
    if (error) {
        return <BankListBlock>Error 발생 ~ !</BankListBlock>;
    }
    return (
        <BankListBlock>
            {!loading && banks && (
                <div>
                    {banks.map((bank) => (
                        <BankItem
                            bank={bank}
                            key={bank._id}
                            onRemove={onRemove}
                        />
                    ))}
                </div>
            )}
        </BankListBlock>
    );
};

export default BankList;
