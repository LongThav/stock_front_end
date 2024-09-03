import { FETCH_MANUFACTURER_REQUEST, FETCH_MANUFACTURER_FAILURE, FETCH_MANUFACTURER_SUCCESS } from "redux/actionTypes/inventoryActionType/inventoryActionType";

export const manufacturerReq = (credentials, callback) => ({
    type: FETCH_MANUFACTURER_REQUEST,
    payload: credentials,
    callback, // Include the callback
});

export const manufacturerResponseSuccess = (user) => ({
    type: FETCH_MANUFACTURER_SUCCESS,
    payload: user,
});

export const manufacturerResponseFailure = (error) => ({
    type: FETCH_MANUFACTURER_FAILURE,
    payload: error,
});