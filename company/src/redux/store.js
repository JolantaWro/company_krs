import {applyMiddleware, createStore} from "redux";
import rootReducers from "./reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store;