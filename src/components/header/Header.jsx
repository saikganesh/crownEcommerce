import React from "react";
import {HeaderStyles,LogoLinkStyles,OptionLinkStyles,OptionsStyles} from "./HeaderStyles"

import {ReactComponent as Logo} from "../../assets/logo.svg"
import CartIcon from "../cartIcon/CartIcon"
import CartDropdown from "../cartDropdown/CartDropdown"

import {connect} from "react-redux"
import {selectCurrentUser} from "../../redux/user/userSelectors"
import {createStructuredSelector} from "reselect"
import {signoutStart} from "../../redux/user/userActions"

 
const Header = ({currentUser,signoutStart}) => {
	return(
		<HeaderStyles>
			<LogoLinkStyles to="/">
				<Logo className="logo" />
			</LogoLinkStyles>
			<OptionsStyles className="options">
				<OptionLinkStyles className="optionLinks" to="/">HOME</OptionLinkStyles>
				<OptionLinkStyles className="optionLinks" to="/shop">SHOP</OptionLinkStyles>
				<OptionLinkStyles className="optionLinks" to="/shop">CONTACT</OptionLinkStyles>
				{
					currentUser ? 
						<OptionLinkStyles as="div" className="optionLinks" onClick={signoutStart}>SIGN OUT</OptionLinkStyles>
						:
						<OptionLinkStyles className="optionLinks" to="/signIn">SIGN IN</OptionLinkStyles>
				}
				<CartIcon />
			</OptionsStyles>
			<CartDropdown />
		</HeaderStyles>
	);
}


const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatchEvent) => ({
	signoutStart : () => dispatchEvent(signoutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)