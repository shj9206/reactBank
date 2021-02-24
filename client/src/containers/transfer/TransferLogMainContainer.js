import { useSelector } from 'react-redux';
import TransferLogMain from '../../components/transfer/TransferLogMain';

const TransferLogMainContainer = () => {
    const { accounts,  loading } = useSelector(
        ({ accounts, loading }) => ({
            accounts: accounts.accounts,
            error: accounts.error,
            loading: loading['accounts/LIST_ACCOUNTS'],
            
        })
    );

    return <TransferLogMain accounts={accounts} loading={loading} />;
};

export default TransferLogMainContainer;
