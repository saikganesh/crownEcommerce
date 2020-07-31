import userTypes from "./userTypes"

const initialState = {
	currentUser : null,
	error : null
}

const userReducer = (state = initialState,action) => {
	switch(action.type)
	{	
		case userTypes.signinSuccess:
		case userTypes.signupSuccess:
			return {
				...state,
				currentUser : action.payload,
				error:null
			} 
		
		case userTypes.signoutSuccess : 
			return {
				...state,
				currentUser : null,
				error : null
			}
		
		case userTypes.signinFailure:
		case userTypes.signoutFailure:
		case userTypes.signupFailure:
			return{
				...state,
				error : action.payload
			}

		default:
			return state
	}	
}

export default userReducer