import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../customButton/CustomButton"
import CartItem from "../cartItem/CartItem"

import {withRouter} from "react-router-dom"

import {connect} from "react-redux"
import {selectCartItems , selectCartHidden} from "../../redux/cart/cartSelectors"
import {createStructuredSelector} from "reselect"
import {toggleCartHidden} from "../../redux/cart/cartActions"

const CartDropdown = (props) => {
	if(props.hidden)
	{
		return null
	}
	else
	{
		return(
			<div className="cartDropdown">
				<h3 className="dropdownTitle">Cart Items</h3>
				<div className="cartItems">
					{
						props.cartItems.length ? 
							props.cartItems.map(item => {
								return <CartItem key={item.id}item={item}/>
						})
							:
							<h4>No Cart Items</h4>
					}
				</div>
				<CustomButton onClick={() => {
					props.history.push("checkout");
					props.dispatch(toggleCartHidden())
				}}>Check Out</CustomButton>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector(
	{hidden : selectCartHidden, cartItems : selectCartItems}
)

export default withRouter(connect(mapStateToProps,null)(CartDropdown))