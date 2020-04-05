import {userActionTypes} from "./userTypes"

export const setCurrentUser = user =>({
	type : userActionTypes.setCurrentUser,
	payload : user
})