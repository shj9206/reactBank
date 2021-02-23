import React from 'react';
import styled from 'styled-components';
import AccountItem from './AccountItem';

const AccountListBlock = styled.div`
    flex: 1; /* 자신이 차지할 수 있는 모든영역은 커버하게됨 */
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    
`;

const AccountList = ({ loading, error, accounts, onRemove, onTransfer, onAccountInfor }) => {
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
                            onAccountInfor={onAccountInfor}
                        />
                    ))}
                </div>
            )}
        </AccountListBlock>
    );
};

export default AccountList;
