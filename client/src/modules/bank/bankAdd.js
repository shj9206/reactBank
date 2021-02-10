import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
    createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as banksAPI from '../../lib/api/bank';
import { takeLatest } from 'redux-saga/effects';

/* 1. 모든 내용 초기화 */
const INITIALIZE = 'add/INITIALIZE';

/* 2. 특정 KEY 값 변경 */
const CHANGE_FIELD = 'add/CHANGE_FIELD';

/* 3. Post 작성 */
const [ADD_BANK, ADD_BANK_SUCCESS, ADD_BANK_FAILURE] = createRequestActionTypes(
    'add/ADD_BANK'
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
export const addBank = createAction(ADD_BANK, ({ bankname }) => ({
    bankname,
}));

const addBankSaga = createRequestSaga(ADD_BANK, banksAPI.register);
export function* addSaga() {
    yield takeLatest(ADD_BANK, addBankSaga);
}

const initialState = {
    add: { bankname: '' },
    bankname: null,
    banknameError: null,
};

const bankAdd = handleActions(
    {
        [INITIALIZE]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        }),
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, (draft) => {
                draft[form][key] = value;
            }),
        [ADD_BANK_SUCCESS]: (state, { payload: bankname }) => ({
            ...state,
            banknameError: null,
            bankname,
        }),
        [ADD_BANK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            banknameError: error,
        }),
    },
    initialState
);

export default bankAdd;
