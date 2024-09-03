// src/redux/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import authSagas from './authSagas/authSagas';
import accountSagas from './accountSagas';
import inventorySagas from './inventorySagas/inventorySagas';
// Import other sagas as needed

export default function* rootSaga() {
    yield all([
        authSagas(),
        accountSagas(),
        inventorySagas(),
        // Add other sagas here
    ]);
}