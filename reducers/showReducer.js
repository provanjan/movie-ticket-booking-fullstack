import { GET_SHOWS, GET_SHOW, DELETE_SHOW } from "../actions/types";
const initialState = {
    shows : [],
    show : {} ,
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_SHOWS :
            return {
                ...state,
                shows : action.palyload ,
            };
        case GET_SHOW : 
            return {
                ...state,
                show : action.palyload ,
            }
        case DELETE_SHOW :
            return {
                ...state ,
                shows : action.palyload ,
            };
        default :
            return state;
    }
}