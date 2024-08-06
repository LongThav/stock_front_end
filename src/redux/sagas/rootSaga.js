// src/redux/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import accountSagas from './accountSagas';
// Import other sagas as needed

export default function* rootSaga() {
    yield all([
        authSagas(),
        accountSagas(),
        // Add other sagas here
    ]);
}