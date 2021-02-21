import { listAccounts } from '../../modules/account/accounts';
import { useEffect } from 'react';
import TransferHead from '../../components/transfer/TransferHead';
import { useDispatch, useSelector } from 'react-redux';


const TransferHeadContainer = (props) => {
    const dispatch = useDispatch();
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

    console.log({accounts})
    console.log(props.accountsId)
    
    const findAccount = accounts.find(function (detail) {
        return detail._id === props.accountsId
    });
    console.log(findAccount)

    

    return( <TransferHead 
                loading={loading}
                error={error}
                accounts={findAccount}
                />
            
        );

    };

export default TransferHeadContainer;
