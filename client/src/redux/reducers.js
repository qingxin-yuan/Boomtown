import { combineReducers} from 'redux';
import itemsReducer from './modules/items';

export default combineReducers({
  items: itemsReducer,
  
});