import { useSelector } from 'react-redux';
import BankHead from '../../components/bank/BankHead';

const BankHeadContainer = () => {
    const { banks } = useSelector(({ banks }) => ({
        banks: banks.banks,
    }));

    return <BankHead banks={banks} />;
};

export default BankHeadContainer;
