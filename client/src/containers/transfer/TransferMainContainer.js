import { listAccounts } from '../../modules/account/accounts';
import { useEffect } from 'react';
import TransferMain from '../../components/transfer/TransferMain';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { transferAccount, changeField, initialize } from '../../modules/account/accountTransfer';

const TransferMainContainer = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { accounts, form } = useSelector(
        ({ accounts, accountTransfer }) => ({
            accounts: accounts.accounts,
            form : accountTransfer.transfer,
            
        })
    );
    useEffect(() => {
        dispatch(listAccounts());
    }, [dispatch]);

    
    
    //해당 계좌 찾기
    const findAccount = accounts.find(function (detail) {
        return detail._id === props.accountsId
    });
    

    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'transfer',
                key: name,
                value,
            })
        );
        
    };

    //계좌 송금
    const onSend = (e) => {
        
        e.preventDefault();
        const {  bankname, receiveAccountNo, cash } = form;
        const accountNo = findAccount.accountNo;
        dispatch(transferAccount({ bankname , accountNo, receiveAccountNo, cash }));
        dispatch(initialize('transfer'));
        
    };

   

    //뒤로 가기
    const onBack = async () => {
        try {
            await history.goBack();
        } catch (e) {
            console.log(e);
        }
    };

    return <TransferMain
                form={form}
                onChange={onChange}
                onSend={onSend}
                onBack={onBack}
                
            />;
};

export default withRouter(TransferMainContainer);
