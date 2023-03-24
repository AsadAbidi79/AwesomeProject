import {combineReducers} from 'redux';
import Reducer from '../reducer/Reducer';

const appReducer = combineReducers({
  Reducer: CounterReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
