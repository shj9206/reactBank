import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as transferAPI from '../../lib/api/transfer';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_TRANSFERLOG,
    LIST_TRANSFERLOG_SUCCESS,
    LIST_TRANSFERLOG_FAILURE,
] = createRequestActionTypes('LIST_TRANSFERLOG');

/* 액션 생성 함수 */
export const listTransferLog = createAction(LIST_TRANSFERLOG);


const listTransferLogSaga = createRequestSaga(LIST_TRANSFERLOG, transferAPI.listTransferLog);
export function* transferLogSaga() {
    yield takeLatest(LIST_TRANSFERLOG, listTransferLogSaga);
}

const initialState = {
    transferlogs: null,
    error: null,
};

const transferLog = handleActions(
    {
        [LIST_TRANSFERLOG_SUCCESS]: (state, { payload: transferlogs }) => ({
            ...state,
            transferlogs,
        }),
        [LIST_TRANSFERLOG_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default transferLog;
