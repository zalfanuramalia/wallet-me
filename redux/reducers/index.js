import { combineReducers } from "redux";
import register from "./register";
import auth from "./auth";
import forgotPass from "./forgotPass";

const rootReducer = combineReducers({
    register,
    auth,
    forgotPass
})

export default rootReducer