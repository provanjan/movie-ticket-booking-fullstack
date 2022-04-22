import { GET_SEATS, GET_SEAT, DELETE_SEAT ,UPDATE_SEAT} from "../actions/types";

const initialState = {
    seats: [],
    seat: {},
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_SEATS:
        return {
          ...state,
          seats: action.payload,
        };
      case GET_SEAT:
        return {
          ...state,
          seat: action.payload,
        };
      case DELETE_SEAT:
        return {
          ...state,
          seats: state.seats.filter(
            (seat) => seat.ticketIdentifier != action.payload
          ),
        };
      default:
        return state;
    }
  }
  