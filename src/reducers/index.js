import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import ticketBookingReducer from "./ticketBookingReducer";
import seatReducer from "./seatReducer";

export default combineReducers({
  errors: errorReducer,
  ticketBookings: ticketBookingReducer,
  seats:seatReducer,
});