// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import accountReducer from './accountReducer';
import itemReducer from './inventoryReducer/itemReducer';
import unitReducer from './inventoryReducer/unitReducer';
import manufacturerReducer from './inventoryReducer/manufacturerReducer';
import brandReducer from './inventoryReducer/brandReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    inventory: itemReducer,
    unit: unitReducer,
    manufacturer: manufacturerReducer,
    brand: brandReducer
        // Add other reducers here
});

export default rootReducer;