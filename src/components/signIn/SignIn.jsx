import React ,{useState} from "react"
import "./SignIn.scss"

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton"

import {withRouter}from "react-router-dom";

import {connect} from "react-redux"

import {googleSigninStart,emailSigninStart} from "../../redux/user/userActions"

const SignIn = ({emailSigninStart,googleSigninStart}) => {

	const [userCredentials,setUserCredentials] = useState({email : '' , password : ''})
	const {email,password} = userCredentials

	const handleSubmit = async (event) => {
		event.preventDefault()
		emailSigninStart(email,password)
		setUserCredentials({email : "" , password : ""})
	}
	

	const handleInputChange = (event) => {
		const  {name,value} = event.target
		setUserCredentials({...userCredentials,[name]:value})
	}

	return(
		<div className="signIn">   
			<h2 className="signInTitle">I already have an account</h2>
			<span>Sign in with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput 
					name="email" 
					type="email" 
					value={email} 
					handleInputChange={handleInputChange} 
					label="email"
					/>
				<FormInput 
					name="password" 
					type="password" 
					value={password} 
					handleInputChange={handleInputChange}
					label="password" 
						/>
				<div className="signInButtons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" 
							onClick={googleSigninStart} 
							isGoogle={true}>Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	googleSigninStart : () => dispatch(googleSigninStart()),
	emailSigninStart : (email,password) => dispatch(emailSigninStart({email,password}))
})


export default withRouter(connect(null,mapDispatchToProps)(SignIn))