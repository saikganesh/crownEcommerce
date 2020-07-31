import userTypes from "./userTypes"

export const emailSigninStart = (emailAndPassword) => ({
	type : userTypes.emailSigninStart,
	payload : emailAndPassword
})

export const googleSigninStart = () => ({
	type : userTypes.googleSigninStart
})

export const checkUserSessionStart = () => ({
	type : userTypes.checkUserSessionStart
})

export const signinSuccess = (user) => ({
	type : userTypes.signinSuccess,
	payload : user
})

export const signinFailure = (err) => ({
	type : userTypes.signinFailure,
	payload : err
})

export const signoutStart = () => ({
	type : userTypes.signoutStart
})

export const signoutSuccess = () => ({
	type : userTypes.signoutSuccess
})

export const signoutFailure = (error) => ({
	type : userTypes.signoutFailure,
	payload : error
})

export const signupStart = (userDetails) => ({
	type: userTypes.signupStart,
	payload : userDetails
})

export const signupSuccess = (user) => ({
	type : userTypes.signupSuccess,
	payload : user
})

export const signupFailure = (error) => ({
	type : userTypes.signupFailure,
	payload : error
})