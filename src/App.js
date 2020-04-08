import React from 'react';
import './App.css';
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import SignInAndSignUpPage from "./pages/signInAndSignUpPage/SignInAndSignUpPage";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"


import { Switch, Route , Redirect} from "react-router-dom";

import {auth,createUserProfileDocument} from "./firebase/firebaseUtils"

import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/userActions"
import {selectCurrentUser} from "./redux/user/userSelectors"
import {createStructuredSelector} from "reselect"

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
		        	 <Route path="/shop" component={ShopPage} />
		        	 <Route exact={true} path="/signIn" render={() => this.props.currentUser ? 
		        	 					<Redirect to="/" /> : <SignInAndSignUpPage />} />
					<Route exact path="/checkout" component={CheckoutPage}/>
		        </Switch>
		    </div>
		  );
	}

	componentDidMount()
	{
		this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			if(userAuth)
			{
				const userRef =	await createUserProfileDocument(userAuth)
				userRef.onSnapshot(snapShot => {
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

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser
}) 

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser : (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
