import React from 'react';
import styled from 'styled-components';
import { IoArrowBack,IoSettingsOutline } from "react-icons/io5";

const BankHeadBlock = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    display : flex;
    .onback {
        font-size : 25px;
        cursor: pointer;
    }
    
    .setting {
        font-size : 25px;
        
        margin-left : 170px;
        
    }
    
    .text {
        font-size: 17px;
        margin-top: 10px;
        margin-left: 10px;
        font-weight: bold;
        padding-right: 20px;
    }
`;

function BankHead({ accounts, onBack }) {
  
    return (
        <BankHeadBlock>
                <div className="onback" onClick={() => onBack()}>
                    <IoArrowBack />
                </div> 
                <div className="text">
                    {accounts.bankname}은행 계좌
                </div>
                <div className="setting">
                    <IoSettingsOutline/>
                </div>
              
        </BankHeadBlock>
    );
}

export default React.memo(BankHead);
