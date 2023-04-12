import {combineReducers} from "redux";
import {DATA_ERROR, DATA_FETCHED, DATA_FETCHING} from "./actions";


const initialState = {
    loading: false,
    error: "",
    company: null
}

function reducerCompany (state=initialState, action) {
    switch (action.type){
        case DATA_FETCHING:
            return {
                ...state,
                loading: true
            }
        case DATA_FETCHED:
            return {
                loading: false,
                company: action.payload,
                error: null
            }
        case DATA_ERROR:
            return {
                loading: false,
                company: null,
                error: action.payload
            }
        default:
            return state
    }
}

const rootReducers = combineReducers({
    company: reducerCompany,
})

export default rootReducers;