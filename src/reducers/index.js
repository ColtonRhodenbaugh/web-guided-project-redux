import { combineReducers } from 'redux';
import dragonListReducer from './dragonListReducer';
import titleReducer from './titleReducer';


 const rootReducer = combineReducers({
    title: titleReducer,
    dragonList: dragonListReducer
});
export default rootReducer;