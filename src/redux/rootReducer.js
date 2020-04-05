import {combineReducers} from "redux";
import userReducer from "./user/userReducer"
import cartReducer from "./cart/cartReducer"


//Root reducer state
export default combineReducers({
	user : userReducer,
	cart : cartReducer
}) 