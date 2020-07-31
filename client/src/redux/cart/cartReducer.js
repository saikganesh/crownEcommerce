import cartActionTypes from "./cartTypes"
import {addItemToCart,deleteCartItem,removeItemInCart} from "./cartUtils"

const initialState = {
	hidden : true,
	cartItems : []
}

const cartReducer = (state=initialState,action) => {
	switch(action.type)
	{
		case cartActionTypes.toggleCartHidden:
			return {
				...state,
				hidden : !state.hidden
			}

		case cartActionTypes.addItem :
			return {
				...state,
				cartItems : addItemToCart(state.cartItems,action.payload)
			}
		
		case cartActionTypes.removeItem :
			return {
				...state,
				cartItems : removeItemInCart(state.cartItems,action.payload)
			}
		
		case cartActionTypes.deleteCartItem :
			return {
				...state,
				cartItems : deleteCartItem(state.cartItems,action.payload)
			}
		
		case cartActionTypes.emptyCart :
			return {
				...state,
				cartItems : []
			}

		default:
			return state
	}
}

export default cartReducer