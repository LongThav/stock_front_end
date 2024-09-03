import { FETCH_UNIT_REQUEST, FETCH_UNIT_FAILURE, FETCH_UNIT_SUCCESS } from "redux/actionTypes/inventoryActionType/inventoryActionType";

export const unitReq = () => ({
    type: FETCH_UNIT_REQUEST,
});

export const unitResponseSuccess = (data) => ({
    type: FETCH_UNIT_SUCCESS,
    payload: data,
});

export const unitResponseFailure = (error) => ({
    type: FETCH_UNIT_FAILURE,
    payload: error,
});