import { FETCH_BRAND_REQUEST, FETCH_BRAND_FAILURE, FETCH_BRAND_SUCCESS } from "redux/actionTypes/inventoryActionType/inventoryActionType";

const initialState = {
    loading: false,
    brand: [],
    error: '',
};


const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BRAND_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BRAND_SUCCESS:
            return {
                ...state,
                loading: false,
                brand: action.payload, // Make sure this matches the action payload
                error: '',
            };
        case FETCH_BRAND_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default brandReducer;