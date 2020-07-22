

import {combineReducers} from 'redux';
import localReducer from './localReducer';
import itemReducer from './itemReducer';
import inventoryReducer from './inventoryReducer';

const rootReducer = combineReducers({
    local : localReducer,
    item : itemReducer,
    inventory:inventoryReducer
});

export default rootReducer;