import { useSelector } from 'react-redux';
import TransferMain from '../../components/transfer/TransferMain';

const TransferMainContainer = () => {
    const { accounts } = useSelector(({ accounts }) => ({
        accounts: accounts.accounts,
    }));

    return <TransferMain accounts={accounts} />;
};

export default TransferMainContainer;
