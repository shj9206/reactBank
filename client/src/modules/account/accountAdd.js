import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
    createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as accountsAPI from '../../lib/api/account';
import { takeLatest } from 'redux-saga/effects';

/* 1. 모든 내용 초기화 */
const INITIALIZE = 'add/INITIALIZE';

/* 2. 특정 KEY 값 변경 */
const CHANGE_FIELD = 'add/CHANGE_FIELD';

/* 3. Post 작성 */
const [ADD_ACCOUNT, ADD_ACCOUNT_SUCCESS, ADD_ACCOUNT_FAILURE] = createRequestActionTypes(
    'add/ADD_ACCOUNT'
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
export const addAccount = createAction(ADD_ACCOUNT, ({ bankname, accountNo }) => ({
    bankname, accountNo
}));

const addAccountSaga = createRequestSaga(ADD_ACCOUNT, accountsAPI.register);
export function* accountAddSaga() {
    yield takeLatest(ADD_ACCOUNT, addAccountSaga);
}

const initialState = {
    add: { accountNo:'',bankname:'' },
    accountNo: null,
    bankname: null,
    accountNoError: null,
};

const accountAdd = handleActions(
    {
        [INITIALIZE]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        }),
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, (draft) => {
                draft[form][key] = value;
            }),
        [ADD_ACCOUNT_SUCCESS]: (state, { payload: accountNo, bankname }) => ({
            ...state,
            accountNoError: null,
            accountNo,
            bankname,
        }),
        [ADD_ACCOUNT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            accountNoError: error,
        }),
    },
    initialState
);

export default accountAdd;
