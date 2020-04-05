import React from 'react';
import './App.css';
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import SignInAndSignUpPage from "./pages/signInAndSignUpPage/SignInAndSignUpPage";
import Header from "./components/header/Header";
import { Switch, Route , Redirect} from "react-router-dom";

import {auth,createUserProfileDocument} from "./firebase/firebaseUtils"

import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/userActions"

class App extends React.Component 
{

	unsubscribeFromAuth = null

	render()
	{
		console.log()
		return (
		    <div className="App">
		    	<Header />
		        <Switch>
					 <Route exact={true} path="/" component={HomePage} />
		        	 <Route exact={true} path="/shop" component={ShopPage} />
		        	 <Route exact={true} path="/signIn" render={() => this.props.currentUser ? 
		        	 					<Redirect to="/" /> : <SignInAndSignUpPage />} />
		        </Switch>
		    </div>
		  );
	}

	componentDidMount()
	{
		console.log(this.props)
		this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			if(userAuth)
			{
				console.log("userAuth",userAuth)
				const userRef =	await createUserProfileDocument(userAuth)
				console.log("user ref",userRef)
				userRef.onSnapshot(snapShot => {
					console.log("snapshot",snapShot)
					this.props.setCurrentUser({
							id : snapShot.id,
							...snapShot.data()
					})
				})
			}
			else
			{
				this.props.setCurrentUser(userAuth)
			}
		})	
	}

	componentWillUnmount()
	{
		this.unsubscribeFromAuth()
	}
}

const mapStateToProps= (rootReducerState) => ({
	currentUser : rootReducerState.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser : (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
