import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import ticketBookingReducer from "./ticketBookingReducer";
import seatReducer from "./seatReducer";
import showReducer from "./showReducer";

export default combineReducers({
  errors: errorReducer,
  ticketBookings: ticketBookingReducer,
  seats:seatReducer,
  shows : showReducer,
});