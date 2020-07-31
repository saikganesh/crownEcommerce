import React from "react"
import "./SignInAndSignUpPage.scss"
import SignIn from "../../components/signIn/SignIn"
import SignUp from "../../components/signUp/SignUp"

const SingInAndSignUpPage = () => {
	return(
		<div className="signInAndSignUpPage">
			<SignIn />
			<SignUp />
		</div>
	);
} 

export default SingInAndSignUpPage