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