import React from 'react';
import './App.css';
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import SignInAndSignUpPage from "./pages/signInAndSignUpPage/SignInAndSignUpPage";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage"

import { Switch, Route , Redirect} from "react-router-dom";

import {connect} from "react-redux"
import {selectCurrentUser} from "./redux/user/userSelectors"
import {createStructuredSelector} from "reselect"
import {checkUserSessionStart} from "./redux/user/userActions"

class App extends React.Component 
{

	render()
	{
		return (
		    <div className="app">
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
		this.props.checkUserSessionStart()
	}

	
}

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser
}) 

const mapDispatchToProps = (dispatchEvent) => ({
	checkUserSessionStart : () => dispatchEvent(checkUserSessionStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
