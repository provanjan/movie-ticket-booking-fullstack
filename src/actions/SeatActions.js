import axios from "axios";
import { GET_ERRORS, GET_SEATS, GET_SEAT, DELETE_SEAT } from "./types";

export const createSeat = (seat,id, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/ticket/${id}`, seat);
    console.log(res);
    history.push(`/selectSeat/SeatDashboard/${id}`);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getSeats = (id,history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/ticket/ticketIdentity/${id}`);
  dispatch({
    type: GET_SEATS,
    payload: res.data,
  });
};

export const getSeat = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/ticket/${id}`);

  dispatch({
    type: GET_SEAT,
    payload: res.data,
  });
};

export const updateSeat = (seat,id,seatSequence, history) => async (dispatch) => {
    try {
      const res = await axios.patch(`http://localhost:8080/api/ticket/update/${seatSequence}`, seat);
      console.log(res);
      history.push(`/selectSeat/SeatDashboard/${id}`);
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  };

export const deleteSeat = (id,sequence) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure to delete this seat? This will delete your seat."
    )
  ) {
    await axios.delete(`http://localhost:8080/api/ticket/delete/${id}/${sequence}`);

    dispatch({
      type: DELETE_SEAT,
      payload: id,
    });
  }
};