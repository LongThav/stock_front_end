// src/redux/actions/inventoryAction/itemAction.js
import { FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE } from 'redux/actionTypes/inventoryActionType/inventoryActionType';

export const itemReq = () => ({
    type: FETCH_ITEM_REQUEST,
});

export const itemResponseSuccess = (item) => ({
    type: FETCH_ITEM_SUCCESS,
    payload: item,
});

export const itemResponseFailure = (error) => ({
    type: FETCH_ITEM_FAILURE,
    payload: error,
});