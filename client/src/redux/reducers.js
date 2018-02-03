import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import itemsReducer from './modules/items';
import profileReducer from './modules/profile';
import authReducer from './modules/authentication';

export default combineReducers({
    items: itemsReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer
});
