import { FETCH_MANUFACTURER_REQUEST, FETCH_MANUFACTURER_FAILURE, FETCH_MANUFACTURER_SUCCESS } from "redux/actionTypes/inventoryActionType/inventoryActionType";

const initialState = {
    loading: false,
    manufacturer: [],
    error: '',
};


const manufacturerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MANUFACTURER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MANUFACTURER_SUCCESS:
            return {
                ...state,
                loading: false,
                manufacturer: action.payload, // Make sure this matches the action payload
                error: '',
            };
        case FETCH_MANUFACTURER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default manufacturerReducer;