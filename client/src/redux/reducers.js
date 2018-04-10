import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import itemsReducer from './modules/items';
import shareReducer from './modules/share';
import authReducer from './modules/authentication';

export default combineReducers({
    items: itemsReducer,
    share: shareReducer,
    auth: authReducer,
    form: formReducer
});
