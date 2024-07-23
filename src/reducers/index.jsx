import { combineReducers } from "redux";
import changeNo from "./updown";
import user from "./data";
import userData from "./data";
import intialno from "./updown";

const rootReducer = combineReducers({
    changeNo,
  userData,
});

export default rootReducer;
