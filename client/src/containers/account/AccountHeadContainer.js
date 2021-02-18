import { useSelector } from 'react-redux';
import AccountHead from '../../components/account/AccountHead';

const AccountHeadContainer = () => {
    const { banks } = useSelector(({ banks }) => ({
        banks: banks.banks,
    }));

    return <AccountHead banks={banks} />;
};

export default AccountHeadContainer;
