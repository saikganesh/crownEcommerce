import React from "react"
import "./SignIn.scss"
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton"
import {auth,signInWithGoogle} from "../../firebase/firebaseUtils"
import {withRouter}from "react-router-dom";

class SignIn extends React.Component 
{
	constructor()
	{
		super()
		this.state = {
			email : "",
			password : ""
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		
		try
		{
			const {email,password} = this.state
			await auth.signInWithEmailAndPassword(email,password);
			this.setState({email : "" , password : ""})


		}
		catch(err)
		{
			console.log("error")
		}
	}

	handleInputChange = (event) => {
		let {name,value} = event.target
		this.setState({[name]:value})
	}

	render()
	{
		return(
			<div className="signIn"> 
				<h2 className="signInTitle">I already have an account</h2>
				<span>Sign in with email and password</span>
				<form onSubmit={this.handleSubmit}>
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
					<div className="signInButtons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogle={true}>Google</CustomButton>
					</div>
 				</form>
			</div>
		);
	}
}


export default withRouter(SignIn)