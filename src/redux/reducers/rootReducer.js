// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import accountReducer from './accountReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer
        // Add other reducers here
});

export default rootReducer;