import React , {useState} from "react"
import "./SignUp.scss"

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton"

import {connect} from "react-redux"
import {signupStart} from "../../redux/user/userActions"



const SignUp = ({signupStart}) => {

	const [userCredentials,setUserCredentials] = useState({
		displayName : "",
		email :"",
		password:"",
		confirmPassword:""
	})

	const{displayName,email,password,confirmPassword} = userCredentials

	const handleSubmit = async (event) => {
		event.preventDefault()
		if(password !== confirmPassword)
		{
			alert("Passwords dont match")
			return
		}
		signupStart({displayName,email,password})
		setUserCredentials({
			displayName : "",
			email :"",
			password:"",
			confirmPassword:""
		})
	}

	const handleInputChange = (event) => {
		let {name,value} = event.target
		setUserCredentials({...userCredentials,[name]:value})
	}
	
	return(
		<div className="signUp">
			<h2 className="signUpTitle">I don't have a account</h2>
			<span>Sign up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput name="displayName" 
					type="text" 
					value={displayName} 
					handleInputChange={handleInputChange} 
					label="Name"
					/>
				<FormInput name="email" 
					type="email" 
					value={email} 
					handleInputChange={handleInputChange} 
					label="email"
					/>
				<FormInput name="password" 
					type="password" 
					value={password} 
					handleInputChange={handleInputChange}
					label="password" 
						/>
				<FormInput name="confirmPassword" 
					type="password" 
					value={confirmPassword} 
					handleInputChange={handleInputChange}
					label="Confirm password" 
						/>
				<div className="signUnButtons">
					<CustomButton type="submit">Sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = (dispatchEvent) => ({
	signupStart : (userDetails) => dispatchEvent(signupStart(userDetails))
})


export default connect(null,mapDispatchToProps)(SignUp)