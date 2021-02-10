import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBanks } from '../../modules/bank/banks';
import { removeBank } from '../../lib/api/bank';
import BankList from '../../components/bank/BankList';
import { addBank, changeField, initialize } from '../../modules/bank/bankAdd';
import { withRouter } from 'react-router-dom';
import BankAdd from '../../components/bank/BankAdd';
import BankErrorModal from '../../components/bank/BankErrorModal';

const BankListContainer = ({ history }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [banknameRegisterError, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const { form, banks, error, loading, banknameError } = useSelector(
        ({ banks, loading, bankAdd }) => ({
            banks: banks.banks,
            error: banks.error,
            loading: loading['banks/LIST_BANKS'],
            form: bankAdd.add,
            bankname: bankAdd.bankname,
            banknameError: bankAdd.banknameError,
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
        if (banknameError) {
            console.log('은행 등록 오류 발생');
            if (banknameError.response.status === 409) {
                setError('이미 등록된 은행입니다 !');
                setModal(true);
                return;
            }
            if (banknameError.response.status === 400) {
                setError('은행 이름을 입력하세요 !');
                setModal(true);
                return;
            }
        }
    }, [banknameError]);

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
        const { bankname } = form;
        dispatch(addBank({ bankname }));
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
            <BankList
                loading={loading}
                error={error}
                banks={banks}
                onRemove={onRemove}
            />
            <BankAdd
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
                description={banknameRegisterError}
            />
        </>
    );
};

export default withRouter(BankListContainer);
