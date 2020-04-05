import cartActionTypes from "./cartTypes"
import {addItemToCart} from "./cartUtils"

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

		default:
			return state
	}
}

export default cartReducer