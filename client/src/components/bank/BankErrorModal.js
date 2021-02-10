import React from 'react';
import ErrorModal from '../common/ErrorModal';

const BankErrorModal = ({ visible, onConfirm, onCancel, description }) => {
    return (
        <ErrorModal
            visible={visible}
            title="은행 등록 에러"
            onConfirm={onConfirm}
            onCancel={onCancel}
            description={description}
        />
    );
};

export default BankErrorModal;
