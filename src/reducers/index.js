import counterReducer from "./counter";
import isMobile from "./isMobile";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isMobile: isMobile,
});

export default allReducers;
