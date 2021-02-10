import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as banksAPI from '../../lib/api/bank';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_BANKS,
    LIST_BANKS_SUCCESS,
    LIST_BANKS_FAILURE,
] = createRequestActionTypes('LIST_BANKS');

/* 액션 생성 함수 */
export const listBanks = createAction(LIST_BANKS);

const listBanksSaga = createRequestSaga(LIST_BANKS, banksAPI.listBanks);
export function* banksSaga() {
    yield takeLatest(LIST_BANKS, listBanksSaga);
}

const initialState = {
    banks: null,
    error: null,
};

const banks = handleActions(
    {
        [LIST_BANKS_SUCCESS]: (state, { payload: banks }) => ({
            ...state,
            banks,
        }),
        [LIST_BANKS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default banks;
