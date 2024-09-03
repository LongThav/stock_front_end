// src/redux/sagas/inventorySagas.js

import { call, put, takeLatest } from 'redux-saga/effects';
import ApiManager from 'services/apiManager';
import { ApiEndPoint } from 'services/apiEndpoints';
import { itemResponseFailure, itemResponseSuccess } from 'redux/actions/inventoryAction/itemAction';
import { unitResponseFailure, unitResponseSuccess } from 'redux/actions/inventoryAction/unitAction';
import { FETCH_UNIT_REQUEST } from 'redux/actionTypes/inventoryActionType/inventoryActionType';
import { FETCH_ITEM_REQUEST } from 'redux/actionTypes/inventoryActionType/inventoryActionType';
import { FETCH_MANUFACTURER_REQUEST } from "redux/actionTypes/inventoryActionType/inventoryActionType";
import { manufacturerResponseFailure, manufacturerResponseSuccess } from 'redux/actions/inventoryAction/manfactureAction';
import { FETCH_BRAND_REQUEST } from 'redux/actionTypes/inventoryActionType/inventoryActionType';
import { brandResponseFailure, brandResponseSuccess } from 'redux/actions/inventoryAction/brandAction';


function* fetchItem() {
    try {
        // Assuming you need to include a token for authorization
        const response = yield call(ApiManager.get, ApiEndPoint.ITEM); // Replace with your API endpoint
        // console.log(response)
        if (response.statusCode === 200) {
            yield put(itemResponseSuccess(response.data));
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        yield put(itemResponseFailure(error.message));
    }
}

function* fetchUnit() {
    try {
        // Assuming you need to include a token for authorization
        const response = yield call(ApiManager.get, ApiEndPoint.UNIT);
        if (response.statusCode === 200) {
            yield put(unitResponseSuccess(response.data));
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        yield put(unitResponseFailure(error.message));
    }
}

function* fetchManufacturer() {
    try {
        // Assuming you need to include a token for authorization
        const response = yield call(ApiManager.get, ApiEndPoint.MANUFACTURER);
        if (response.statusCode === 200) {
            // console.log("Manufacturer: ", response.data);
            yield put(manufacturerResponseSuccess(response.data));
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        yield put(manufacturerResponseFailure(error.message));
    }
}

function* fetchBrand() {
    try {
        // Assuming you need to include a token for authorization
        const response = yield call(ApiManager.get, ApiEndPoint.BRAND);
        if (response.statusCode === 200) {
            console.log("Brand: ", response.data);
            yield put(brandResponseSuccess(response.data));
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        yield put(brandResponseFailure(error.message));
    }
}

// Watcher saga
function* inventorySagas() {
    yield takeLatest(FETCH_ITEM_REQUEST, fetchItem);
    yield takeLatest(FETCH_UNIT_REQUEST, fetchUnit);
    yield takeLatest(FETCH_MANUFACTURER_REQUEST, fetchManufacturer);
    yield takeLatest(FETCH_BRAND_REQUEST, fetchBrand);
    // console.log("kjbvskjdv")
}

export default inventorySagas;