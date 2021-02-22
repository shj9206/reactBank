import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
    createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as accountsAPI from '../../lib/api/account';
import { takeLatest } from 'redux-saga/effects';

/* 1. 모든 내용 초기화 */
const INITIALIZE = 'transfer/INITIALIZE';

/* 2. 특정 KEY 값 변경 */
const CHANGE_FIELD = 'transfer/CHANGE_FIELD';

/* 3. Post 작성 */
const [TRANSFER_ACCOUNT, TRANSFER_ACCOUNT_SUCCESS, TRANSFER_ACCOUNT_FAILURE] = createRequestActionTypes(
    'transfer/TRANSFER_ACCOUNT'
);

export const initialize = createAction(INITIALIZE, (form) => form);
export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    })
);

export const transferAccount = createAction(TRANSFER_ACCOUNT, ({ bankname, accountNo, receiveAccountNo, cash }) => ({
    bankname, accountNo, receiveAccountNo, cash
}));

const transferAccountSaga = createRequestSaga(TRANSFER_ACCOUNT, accountsAPI.transfer);
export function* accountTransferSaga() {
    yield takeLatest(TRANSFER_ACCOUNT, transferAccountSaga);
}

const initialState = {
    transfer: { bankname:'', receiveAccountNo:'', cash:'', },
    bankname: null,
    receiveAccountNo : null,
    cash : null,
    accountNoError: null,
};

const accountTransfer = handleActions(
    {
        [INITIALIZE]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        }),
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, (draft) => {
                draft[form][key] = value;
            }),
        [TRANSFER_ACCOUNT_SUCCESS]: (state, { payload: bankname,receiveAccountNo, cash, }) => ({
            ...state,
            accountNoError: null,
            bankname,
            receiveAccountNo,
            cash,
        }),
        [TRANSFER_ACCOUNT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            accountNoError: error,
        }),
    },
    initialState
);

export default accountTransfer;
