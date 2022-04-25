import axios from "axios";
import { DELETE_SHOW, GET_ERRORS, GET_SHOW, GET_SHOWS } from "./types";

export const createShow = (show, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/shows", show);
        history.push("/dashboard");
    }
    catch(error){
        dispatch({
            type: GET_ERRORS,
            palyload: error.response.data,              
        });
    }
};  

export const getShows=()=>async dispatch=>{
    const res = await axios.get("http://localhost:8080/api/shows/all")
    dispatch({
        type : GET_SHOWS,
        palyload : res.data ,
    });
};

export const getShow=(id, history) => async (dispatch) => {
    const res = await axios.get(`http://localhost:8080/api/shows/${id}`);
    dispatch({
        type : GET_SHOW,
        palyload : res.data ,
    });
};

export const deleteShow = id => async (dispatch) => {
    if(window.confirm("Are you sure to delete the show. This will delete everything.")){
        await axios.delete(`http://localhost:8080/api/shows/${id}`);
    dispatch({
        type : DELETE_SHOW,
        palyload : id ,
    });
    }
};