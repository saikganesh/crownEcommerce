import React from "react"
import "./CartIcon.scss"
import {ReactComponent as CartLogo} from "../../assets/cart.svg"


import {connect} from "react-redux"
import {toggleCartHidden} from "../../redux/cart/cartActions"
import {selectCartItemsCount} from "../../redux/cart/cartSelectors"
import {createStructuredSelector} from "reselect"
 
const CartIcon = (props)=> {
	return(
		<div className="cartIcon" onClick={props.toggleCartHidden}>
			<CartLogo className="cartLogo"/>
			<span className="itemCount">{props.itemCount}</span>
		</div>	
	);
}

const mapStateToProps = createStructuredSelector(
	{ itemCount : selectCartItemsCount } 
)

const mapDispatchToProps = (dispatch) => {
	return {toggleCartHidden : () => dispatch(toggleCartHidden())}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)