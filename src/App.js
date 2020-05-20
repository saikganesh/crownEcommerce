import React,{lazy ,Suspense} from 'react';
import './App.css';

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner"

import { Switch, Route , Redirect} from "react-router-dom";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"

import {connect} from "react-redux"
import {selectCurrentUser} from "./redux/user/userSelectors"
import {createStructuredSelector} from "reselect"
import {checkUserSessionStart} from "./redux/user/userActions"

const HomePage = lazy(() => import("./pages/homePage/HomePage"))
const ShopPage = lazy(() => import("./pages/shopPage/ShopPage"))
const CheckoutPage = lazy(() => import("./pages/checkoutPage/CheckoutPage"))
const SignInAndSignUpPage = lazy(() => import("./pages/signInAndSignUpPage/SignInAndSignUpPage"))

class App extends React.Component 
{

	render()
	{
		return (
		    <div className="app">
		    	<Header />
				<Suspense fallback={<Spinner />}>
					<ErrorBoundary>
						<Switch>
							<Route exact={true} path="/" component={HomePage} />
							<Route path="/shop" component={ShopPage} />
							<Route exact={true} path="/signIn" render={() => this.props.currentUser ? 
												<Redirect to="/" /> : <SignInAndSignUpPage />} />
							<Route exact path="/checkout" component={CheckoutPage}/>
						</Switch>
					</ErrorBoundary>
				</Suspense>
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
