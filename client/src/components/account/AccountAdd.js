import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5; /* 기존 Box위로 올라타야하므로 강제로 z축을 기준으로 올림 */
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    /* transform(이동) : translate -> 본 객체 가로세로 사이즈를 기준으로 이동하는 함수 */
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in;

    /* CircleButton 컴포넌트가 전달받은 open props값이 true일때, false일때 */
    ${(props) =>
        props.open &&
        css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    form {
        border-radius: 4px;
        background: #f8f9fa;
        padding-left: 32px;
        padding-top: 64px;
        padding-right: 32px;
        padding-bottom: 72px;

        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-top: 2px solid #e9ecef;
        display: flex;
    }
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
        border-radius: 6px;
    }

    input {
        padding: 12px;
        border: 1px solid #dee2e6;
        width: 100%;
        outline: none;
        font-size: 18px;
        box-sizing: border-box;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        letter-spacing: 4px;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

function AccountAdd({ open, form, onChange, onRegister, onToggle }) {
    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <form>
                        <input
                            autoFocus
                            placeholder="은행"
                            onChange={onChange}
                            name="bankname"
                            value={form.bankname}
                        />
                        <input
                            autoFocus
                            placeholder="계좌번호"
                            onChange={onChange}
                            name="accountNo"
                            value={form.accountNo}
                        />
                        <button onClick={onRegister}>추가</button>
                    </form>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default AccountAdd;
