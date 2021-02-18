import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import banks, { banksSaga } from './bank/banks';
import bankAdd, { addSaga } from './bank/bankAdd';
import accounts, { accountSaga } from './account/accounts';
import accountAdd, { accountAddSaga } from './account/accountAdd';
const rootReducer = combineReducers({
    auth,
    loading,
    user,
    banks,
    bankAdd,
    accounts,
    accountAdd,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), banksSaga(), addSaga(), accountSaga(),accountAddSaga()]);
}

export default rootReducer;
