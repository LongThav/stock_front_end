// src/redux/reducers/inventoryReducer/itemReducer.js
import { FETCH_ITEM_REQUEST, FETCH_ITEM_FAILURE, FETCH_ITEM_SUCCESS } from 'redux/actionTypes/inventoryActionType/inventoryActionType';

const initialState = {
    loading: false,
    item: [],
    pageable: {},
    totalPages: 0,
    totalElements: 0,
    error: '',
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.content, // Make sure this matches the action payload
                pageable: action.payload.pageable,
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                error: '',
            };
        case FETCH_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                item: [],
                pageable: {},
                totalPages: 0,
                totalElements: 0,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default itemReducer;