import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBanks } from '../../modules/bank/banks';
import { removeBank } from '../../lib/api/bank';
import BankList from '../../components/bank/BankList';

import { addAccount, changeField, initialize } from '../../modules/account/accountAdd';
import { withRouter } from 'react-router-dom';
import AccountAdd from '../../components/account/AccountAdd';
import BankErrorModal from '../../components/bank/BankErrorModal';

const AccountListContainer = ({ history }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [accountNoRegisterError, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const { form, accounts, error, loading, accountNo, accountNoError } = useSelector(
        ({ accounts, loading, accountAdd }) => ({
            accounts: accounts.accounts,
            error: accounts.error,
            loading: loading['banks/LIST_BANKS'],
            form: accountAdd.add,
            accountNo: accountAdd.accountNo,
            accountNoError: accountAdd.accountNoError,
        })
    );

    useEffect(() => {
        dispatch(listBanks());
    }, [dispatch]);

    const onRemove = async (bankId) => {
        try {
            await removeBank(bankId);
            dispatch(listBanks());
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
        dispatch(listBanks());
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
        dispatch(listBanks());
    };

    return (
        <>
            {/* <BankList
                loading={loading}
                error={error}
                banks={banks}
                onRemove={onRemove}
            /> */}
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
