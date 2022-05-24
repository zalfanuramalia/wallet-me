import { combineReducers } from "redux";
import register from "./register";
import auth from "./auth";
import forgotPass from "./forgotPass";
import users from "./users";
import transfer from "./transfer";
import topup from "./topup";

const rootReducer = combineReducers({
    register,
    auth,
    forgotPass,
    users,
    transfer,
    topup,
})

export default rootReducer