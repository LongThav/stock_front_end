import { FETCH_BRAND_REQUEST, FETCH_BRAND_FAILURE, FETCH_BRAND_SUCCESS } from "redux/actionTypes/inventoryActionType/inventoryActionType";

export const brandReq = (credentials, callback) => ({
    type: FETCH_BRAND_REQUEST,
    payload: credentials,
    callback, // Include the callback
});

export const brandResponseSuccess = (user) => ({
    type: FETCH_BRAND_SUCCESS,
    payload: user,
});

export const brandResponseFailure = (error) => ({
    type: FETCH_BRAND_FAILURE,
    payload: error,
});