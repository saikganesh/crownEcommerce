import cartActionTypes from "./cartTypes"

export const toggleCartHidden = () => {
	return {
		type : cartActionTypes.toggleCartHidden
	}
}

export const addItem = (item) => {
	return {
		type : cartActionTypes.addItem,
		payload : item
	}
}

export const removeItem = (item) => {
	return {
		type : cartActionTypes.removeItem,
		payload : item
	}
}

export const deleteCartItem = (item) => {
	return{
		type : cartActionTypes.deleteCartItem,
		payload : item
	}
}

export const emptyCart = () => {
	return{
		type : cartActionTypes.emptyCart
	}
}

