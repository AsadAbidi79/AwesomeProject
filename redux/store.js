import { createStore } from "redux";
import mainReducer from '../redux/reducer/RootReducer'

export const mystore = createStore (mainReducer);
