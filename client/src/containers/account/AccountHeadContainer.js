import { useSelector } from 'react-redux';
import AccountHead from '../../components/account/AccountHead';

const AccountHeadContainer = () => {
    const { accounts } = useSelector(({ accounts }) => ({
        accounts: accounts.accounts,
    }));

    return <AccountHead accounts={accounts} />;
};

export default AccountHeadContainer;
