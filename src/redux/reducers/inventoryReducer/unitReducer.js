import { FETCH_UNIT_REQUEST, FETCH_UNIT_FAILURE, FETCH_UNIT_SUCCESS } from "redux/actionTypes/inventoryActionType/inventoryActionType";

const initialState = {
    loading: false,
    unit: [],
    error: '',
};

const unitReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UNIT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_UNIT_SUCCESS:
            return {
                ...state,
                loading: false,
                unit: action.payload, // Make sure this matches the action payload
                error: '',
            };
        case FETCH_UNIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default unitReducer;