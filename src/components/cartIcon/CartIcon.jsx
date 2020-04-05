import React from "react"
import "./CartIcon.scss"
import {ReactComponent as CartLogo} from "../../assets/cart.svg"


import {connect} from "react-redux"
import {toggleCartHidden} from "../../redux/cart/cartActions"

const CartIcon = (props)=> {
	console.log(props)
	return(
		<div className="cartIcon" onClick={props.toggleCartHidden}>
			<CartLogo className="cartLogo"/>
			<span className="itemCount">0</span>
		</div>	
	);
}

const mapDispatchToProps = (dispatch) => {
	return {toggleCartHidden : () => dispatch(toggleCartHidden())}
}
 
export default connect(null,mapDispatchToProps)(CartIcon)