import React from 'react';
import styled from 'styled-components';

const BankHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h2 {
        margin: 0;
        font-size: 24px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function BankHead({ banks }) {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <BankHeadBlock>
            <h2>{dateString}</h2>
            <div className="day">{dayName}</div>
            <div className="tasks-left">
                등록된 은행 : {banks ? banks.length : 0}
            </div>
        </BankHeadBlock>
    );
}

export default React.memo(BankHead);
