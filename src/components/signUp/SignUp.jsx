import React from "react"
import "./SignUp.scss"
import {auth,createUserProfileDocument} from "../../firebase/firebaseUtils"
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton"


class SignUp extends React.Component
{
	constructor()
	{
		super()
		this.state = {
			displayName : "",
			email :"",
			password:"",
			confirmPassword:""
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const{displayName,email,password,confirmPassword} = this.state
		if(password !== confirmPassword)
		{
			alert("Passwords dont match")
			return
		}

		try
		{
			const {user} = await auth.createUserWithEmailAndPassword(email,password)
			console.log("sign up userAuth",user)
			await createUserProfileDocument(user,{displayName})
			this.setState({displayName : "" ,email : "" , password : "",confirmPassword : ""})
		}
		catch(err)
		{
			console.log(err.message)
		}
	}

	handleInputChange = (event) => {
		let {name,value} = event.target
		this.setState({[name]:value})
	}

	render()
	{
		return(
			<div className="signUp">
				<h2 className="signUpTitle">I don't have a account</h2>
				<span>Sign up with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput name="displayName" 
						type="text" 
						value={this.state.displayName} 
						handleInputChange={this.handleInputChange} 
						label="Name"
						/>
					<FormInput name="email" 
						type="email" 
						value={this.state.email} 
						handleInputChange={this.handleInputChange} 
						label="email"
						/>
					<FormInput name="password" 
						type="password" 
						value={this.state.password} 
						handleInputChange={this.handleInputChange}
						label="password" 
						 />
					<FormInput name="confirmPassword" 
						type="password" 
						value={this.state.confirmPassword} 
						handleInputChange={this.handleInputChange}
						label="Confirm password" 
						 />
					<div className="signUnButtons">
						<CustomButton type="submit">Sign Up</CustomButton>
					</div>
 				</form>
			</div>
		);
	}


}


export default SignUp