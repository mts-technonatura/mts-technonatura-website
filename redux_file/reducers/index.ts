import { combineReducers } from 'redux';
import authReducer from './authReducer';

const RootReducer = combineReducers({
  auth: authReducer,
});

export default RootReducer;
