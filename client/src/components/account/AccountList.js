import React from 'react';
import styled from 'styled-components';
import AccountItem from './AccountItem';

const AccountListBlock = styled.div`
    flex: 1; /* 자신이 차지할 수 있는 모든영역은 커버하게됨 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    // background: gray;  사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 
`;

const AccountList = ({ loading, error, accounts, onRemove, onTransfer }) => {
    if (error) {
        return <AccountListBlock>Error 발생 ~ !</AccountListBlock>;
    }
    return (
        <AccountListBlock>
            {!loading && accounts && (
                <div>
                    {accounts.map((account) => (
                        <AccountItem
                            account={account}
                            key={account._id}
                            onRemove={onRemove}
                            onTransfer={onTransfer}
                        />
                    ))}
                </div>
            )}
        </AccountListBlock>
    );
};

export default AccountList;
