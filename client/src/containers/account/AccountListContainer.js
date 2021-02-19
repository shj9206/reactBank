import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAccounts } from '../../modules/account/accounts';
import { removeAccount } from '../../lib/api/account';

import AccountList from '../../components/account/AccountList';

import { addAccount, changeField, initialize } from '../../modules/account/accountAdd';
import { withRouter } from 'react-router-dom';
import AccountAdd from '../../components/account/AccountAdd';
import BankErrorModal from '../../components/bank/BankErrorModal';

const AccountListContainer = ({ history }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [accountNoRegisterError, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const { form, accounts, error, loading, accountNoError } = useSelector(
        ({ accounts, loading, accountAdd }) => ({
            accounts: accounts.accounts,
            error: accounts.error,
            loading: loading['accounts/LIST_ACCOUNTS'],
            form: accountAdd.add,
            accountNo: accountAdd.accountNo,
            accountNoError: accountAdd.accountNoError,
        })
    );

    useEffect(() => {
        dispatch(listAccounts());
    }, [dispatch]);

    const onRemove = async (bankId) => {
        try {
            await removeAccount(bankId);
            dispatch(listAccounts());
        } catch (e) {
            console.log(e);
        }
    };

    const onTransfer = async (accountsId) => {
        try {
            await removeAccount(accountsId);
            dispatch(listAccounts());
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { 
        if (accountNoError) {
            console.log('계좌 등록 오류 발생');
            if (accountNoError.response.status === 409) {
                setError('이미 등록된 계좌입니다 !');
                setModal(true);
                return;
            }
            if (accountNoError.response.status === 400) {
                setError('계좌 번호를 입력하세요 !');
                setModal(true);
                return;
            }
        }
    }, [accountNoError]);

    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'add',
                key: name,
                value,
            })
        );
    };

    const onRegister = (e) => {
        e.preventDefault();
        const { bankname, accountNo } = form;
        dispatch(addAccount({ bankname , accountNo }));
        dispatch(initialize('add'));
        dispatch(listAccounts());
    };

    const onToggle = () => {
        setOpen(!open);
        dispatch(initialize('add'));
    };

    const onCancel = () => {
        setModal(false);
    };

    const onConfirm = () => {
        setModal(false);
        dispatch(listAccounts());
    };

    return (
        <>
            <AccountList
                loading={loading}
                error={error}
                accounts={accounts}
                onRemove={onRemove}
                onTransfer={onTransfer}
            />
            <AccountAdd
                form={form}
                open={open}
                onChange={onChange}
                onRegister={onRegister}
                onToggle={onToggle}
            />
            <BankErrorModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                description={accountNoRegisterError}
            />
        </>
    );
};

export default withRouter(AccountListContainer);
