import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/logo.svg"
import CartIcon from "../cartIcon/CartIcon"
import CartDropdown from "../cartDropdown/CartDropdown"

import {auth} from "../../firebase/firebaseUtils"

import {connect} from "react-redux"
 
const Header = ({currentUser}) => {
	return(
		<div className="header">
			<Link className="logoLink" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="optionLinks" to="/">HOME</Link>
				<Link className="optionLinks" to="/shop">SHOP</Link>
				<Link className="optionLinks" to="/shop">CONTACT</Link>
				{
					currentUser ? 
						<div className="optionLinks" onClick={(e) => auth.signOut()}>SIGN OUT</div>
						:
						<Link className="optionLinks" to="/signIn">SIGN IN</Link>
				}
				<CartIcon />
			</div>
			<CartDropdown />
		</div>
	);
}


const mapStateToProps= (rootReducerState) => ({
	currentUser : rootReducerState.user.currentUser
})



export default connect(mapStateToProps)(Header)