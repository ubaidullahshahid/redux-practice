import { combineReducers } from "redux";
import changeNo from "./updown";
import userData from "./data";

const rootReducer = combineReducers({
  changeNo,
  userData, 
});

export default rootReducer;
