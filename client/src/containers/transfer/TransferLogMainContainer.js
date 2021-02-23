import { useSelector } from 'react-redux';
import TransferLogHead from '../../components/transfer/TransferLogHead';

const TransferLogHeadContainer = () => {
    const { accounts } = useSelector(({ accounts }) => ({
        accounts: accounts.accounts,
    }));

    return <TransferLogHead accounts={accounts} />;
};

export default TransferLogHeadContainer;
