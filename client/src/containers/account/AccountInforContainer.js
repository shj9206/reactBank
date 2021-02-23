import { listAccounts } from '../../modules/account/accounts';
import { useEffect } from 'react';
import AccountInforMain from '../../components/account/AccountInforMain';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';


const AccountInforContainer = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { accounts, error, loading } = useSelector(
        ({ accounts, loading }) => ({
            accounts: accounts.accounts,
            error: accounts.error,
            loading: loading['accounts/LIST_ACCOUNTS'],
            
        })
    );

    useEffect(() => {
        dispatch(listAccounts());
    }, [dispatch]);

    const onBack = async () => {
        try {
            await history.goBack();
        } catch (e) {
            console.log(e);
        }
    };
    
    const onTransferLog = async () => {
        try {
            await history.push("/TransferLog/"+props.accountsId);
        } catch (e) {
            console.log(e);
        }
    };
   
    
    const findAccount = accounts.find(function (detail) {
        return detail._id === props.accountsId
    });
    

    

    return( <AccountInforMain 
                loading={loading}
                error={error}
                accounts={findAccount}
                onBack={onBack}
                onTransferLog={onTransferLog}
                />
            
        );

    };

    export default withRouter(AccountInforContainer);
