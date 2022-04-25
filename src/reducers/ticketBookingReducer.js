import { GET_TICKETBOOKINGS, GET_TICKETBOOKING, DELETE_TICKETBOOKING } from "../actions/types";

const initialState = {
  ticketBookings: [],
  ticketBooking: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TICKETBOOKINGS:
      return {
        ...state,
        ticketBookings: action.payload,
      };
    case GET_TICKETBOOKING:
      return {
        ...state,
        ticketBooking: action.payload,
      };
    case DELETE_TICKETBOOKING:
      return {
        ...state,
        ticketBookings: state.ticketBookings.filter(
          (ticketBooking) => ticketBooking.ticketIdentifier != action.payload
        ),
      };
    default:
      return state;
  }
}
