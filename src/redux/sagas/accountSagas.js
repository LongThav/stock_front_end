// src/redux/sagas/userSagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProfileSuccess, fetchProfileFailure } from '../actions/accountAction';
import { FETCH_PROFILE_REQUEST } from '../actionTypes/accountActionType';
import ApiManager from '../../services/apiManager';
import { ApiEndPoint } from '../../services/apiEndpoints';

// Fetch user profile
function* fetchProfile() {
    try {
        // Assuming you need to include a token for authorization
        const response = yield call(ApiManager.get, ApiEndPoint.PROFILE); // Replace with your API endpoint
        if (response.statusCode === 200) {
            yield put(fetchProfileSuccess(response.data));
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        yield put(fetchProfileFailure(error.message));
    }
}

// Watcher saga
function* accountSagas() {
    yield takeLatest(FETCH_PROFILE_REQUEST, fetchProfile);
}

export default accountSagas;