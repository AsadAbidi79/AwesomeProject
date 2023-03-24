import {ADDITION, SUBTRACTION} from '../action/counter-action';

const initialState = {
  counter: 0,
  
};
export default mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter +1};

    case SUBTRACTION:
      return {...state, counter:  state.counter -1};
    default:
      return state;
  }
};
