import { combineReducers } from "redux";
import register from "./register";
import auth from "./auth"

const rootReducer = combineReducers({
    register,
    auth,
})

export default rootReducer