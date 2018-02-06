import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import itemsReducer from './modules/items';
// import profileReducer from './modules/profile';
import shareReducer from './modules/share';
import authReducer from './modules/authentication';

export default combineReducers({
    items: itemsReducer,
    share: shareReducer,
    // profile: profileReducer,
    auth: authReducer,
    form: formReducer
});
