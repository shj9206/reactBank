import React from 'react';
import styled from 'styled-components';

const AccountTemplateBlock = styled.div`
    width: 400px;
    min-width: 400px;
    min-height: 650px;
    max-height: 650px;
    margin: auto;
    margin-top : 150px;
    background: #ffffff;
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    border-radius: 15px;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
`;

function AccountTemplate({ children }) {
    return <AccountTemplateBlock>{children}</AccountTemplateBlock>;
}

export default AccountTemplate;
