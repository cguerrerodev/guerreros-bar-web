

import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import inventoryReducer from './inventoryReducer';

const rootReducer = combineReducers({
    item : itemReducer,
    inventory:inventoryReducer
});

export default rootReducer;