import axios from "axios";
import { GET_ERRORS, GET_TICKETBOOKINGS, GET_TICKETBOOKING, DELETE_TICKETBOOKING } from "./types";

export const createTicketBooking = (ticketBooking, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/ticketbooking", ticketBooking);
    console.log(res);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getTicketBookings = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/ticketbooking/all");
  dispatch({
    type: GET_TICKETBOOKINGS,
    payload: res.data,
  });
};

export const getTicketBooking = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/ticketbooking/${id}`);

  dispatch({
    type: GET_TICKETBOOKING,
    payload: res.data,
  });
};

export const deleteTicketBooking = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure to delete this booking? This will delete everything."
    )
  ) {
    await axios.delete(`http://localhost:8080/api/projects/${id}`);

    dispatch({
      type: DELETE_TICKETBOOKING,
      payload: id,
    });
  }
};