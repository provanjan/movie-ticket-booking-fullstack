import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const initialState = {};
const middleWare = [thunk];

let store;
if(window.navigator.userAgent.includes("Chrome")){
    //Create strore with Redux plugin.
    store = createStore(rootReducer, 
            compose(
                applyMiddleware(...middleWare), 
                window.__REDUX_DEVTOOLS_EXTENSION__ && 
                window.__REDUX_DEVTOOLS_EXTENSION__()
            ));
}
else{
    //Create strore without Redux plugin.
    store = createStore(rootReducer, 
        compose(applyMiddleware(...middleWare)));
}

export default store;
