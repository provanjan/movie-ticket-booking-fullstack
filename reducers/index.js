import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import showReducer from "./showReducer";

export default combineReducers({
    errors : errorReducer ,
    shows : showReducer,
});