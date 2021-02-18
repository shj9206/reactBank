import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as accountsAPI from '../../lib/api/account';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_ACCOUNTS,
    LIST_ACCOUNTS_SUCCESS,
    LIST_ACCOUNTS_FAILURE,
] = createRequestActionTypes('LIST_ACCOUNTS');

/* 액션 생성 함수 */
export const listAccounts = createAction(LIST_ACCOUNTS);

const listAccountsSaga = createRequestSaga(LIST_ACCOUNTS, accountsAPI.listAccounts);
export function* accountSaga() {
    yield takeLatest(LIST_ACCOUNTS, listAccountsSaga);
}

const initialState = {
    accounts: null,
    error: null,
};

const accounts = handleActions(
    {
        [LIST_ACCOUNTS_SUCCESS]: (state, { payload: accounts }) => ({
            ...state,
            accounts,
        }),
        [LIST_ACCOUNTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default accounts;
