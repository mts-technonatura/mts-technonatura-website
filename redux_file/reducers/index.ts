import { combineReducers } from 'redux';
import authReducer from './PokemonReducer';

const RootReducer = combineReducers({
  auth: authReducer,
});

export default RootReducer;
