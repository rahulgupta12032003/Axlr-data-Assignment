import {combineReducers} from "redux";

import {legacy_createStore as createStore , applyMiddleware} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { loginUserReducer } from "./Reducer/userReducer";
import { productsReducer } from "./Reducer/productReducer";

const finalReducer = combineReducers({
    loginUserReducer : loginUserReducer,
    productsReducer : productsReducer
});


const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;

const initialState = {
    loginUserReducer : {
        currentUser : currentUser,
    }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk))); 

export default store;