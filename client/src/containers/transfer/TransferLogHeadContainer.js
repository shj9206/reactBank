import TransferLogHead from '../../components/transfer/TransferLogHead';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { listAccounts } from '../../modules/account/accounts';
import { useEffect } from 'react';

const TransferLogHeadContainer = (props) => {
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

    const findAccount = accounts.find(function (detail) {
        return detail._id === props.accountsId
    });

    return <TransferLogHead 
                loading={loading}
                error={error}
                accounts={findAccount}
                onBack={onBack} 
            />;
};

export default withRouter(TransferLogHeadContainer);
