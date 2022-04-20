import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import ticketBookingReducer from "./ticketBookingReducer";

export default combineReducers({
  errors: errorReducer,
  ticketBookings: ticketBookingReducer,
});