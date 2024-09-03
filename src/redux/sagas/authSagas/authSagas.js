// src/redux/sagas/authSagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../../actions/authAction/authAction';
import { LOGIN_REQUEST, REGISTER_REQUEST } from '../../actionTypes/authActionType/authActionType';
import ApiManager from 'services/apiManager';
// import { ApiEndPoint } from '../../services/apiEndpoints';
import { ApiEndPoint } from 'services/apiEndpoints';


function* login(action) {
    try {
        const user = yield call(ApiManager.post, ApiEndPoint.LOGIN, action.payload);
        localStorage.setItem('token', user.data.token);
        // console.log(user)
        yield put(loginSuccess(user));
        if (action.callback) {
            action.callback(null);
        }
    } catch (error) {
        yield put(loginFailure(error.message));
        if (action.callback) {
            action.callback(error.message);
        }
    }
}


function* register(action) {
    try {
        const user = yield call(ApiManager.post, ApiEndPoint.REGISTER, action.payload);
        // console.log(user);
        yield put(loginSuccess(user));
        if (action.callback) {
            action.callback(null);
        }
    } catch (error) {
        yield put(loginFailure(error.message));
        if (action.callback) {
            action.callback(error.message);
        }
    }
}

function* authSagas() {
    yield takeLatest(LOGIN_REQUEST, login);
    yield takeLatest(REGISTER_REQUEST, register);
}

export default authSagas;