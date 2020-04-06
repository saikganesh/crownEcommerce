import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../customButton/CustomButton"
import CartItem from "../cartItem/CartItem"

import {connect} from "react-redux"
import {selectCart} from "../../redux/cart/cartSelectors"

const CartDropdown = (props) => {
	console.log(props)
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
						props.cartItems.map(item => {
							return <CartItem key={item.id}item={item}/>
					   })
					}
				</div>
				<CustomButton>Check Out</CustomButton>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {hidden : selectCart(state).hidden, cartItems : selectCart(state).cartItems}
}

export default connect(mapStateToProps,null)(CartDropdown)