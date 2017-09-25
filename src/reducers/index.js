import { combineReducers } from 'redux';
import appReducer from './appReducer';

const makeRootReducer = () => {
  return combineReducers({
    appReducer: appReducer
  });
}
export default makeRootReducer;
