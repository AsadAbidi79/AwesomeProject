import {ADDITION, SUBTRACTION} from '../action/ActionTypes';



export const addition = count => ({
  type: ADDITION,
  payload: count + 1,
});

export const subtraction = count => ({
  type: SUBTRACTION,
  payload: count - 1,
});

export const getDataMethod =data => ({
    type: 'GET_DATA',
    payload: data,
});