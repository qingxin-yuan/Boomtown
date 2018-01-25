import { combineReducers } from 'redux';
import itemsReducer from './modules/items';
import profileReducer from './modules/profile';

export default combineReducers({
    items: itemsReducer,
    profile: profileReducer
});
