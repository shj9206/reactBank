import { useDispatch, useSelector } from 'react-redux';
import TransferLogMain from '../../components/transfer/TransferLogMain';
import { useEffect } from 'react';
import { listTransferLog } from '../../modules/transfer/transferLog';

const TransferLogMainContainer = (props) => {
    const dispatch = useDispatch();
    const { accounts,  loading, transferlogs } = useSelector(
        ({ accounts, loading, transferLog  }) => ({
            accounts: accounts.accounts,
            error: accounts.error,
            loading: loading['accounts/LIST_ACCOUNTS'],
            transferlogs : transferLog.transferlogs,
            transferlogserror : transferLog.error,
            
        })
    );

    const findAccount = accounts.find(function (detail) {
        return detail._id === props.accountsId
    });    
    
    
   
    
    useEffect(() => {
        dispatch(listTransferLog());
    }, [dispatch]);

    

  
    return <TransferLogMain accounts={findAccount} loading={loading} transferlogs={transferlogs} />;
};

export default TransferLogMainContainer;
