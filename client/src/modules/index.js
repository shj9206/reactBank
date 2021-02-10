import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import banks, { banksSaga } from './bank/banks';
import bankAdd, { addSaga } from './bank/bankAdd';
const rootReducer = combineReducers({
    auth,
    loading,
    user,
    banks,
    bankAdd,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), banksSaga(), addSaga()]);
}

export default rootReducer;
