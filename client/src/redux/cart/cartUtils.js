export const addItemToCart = (cartItems,itemToAdd) => {

    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)

    if(existingItem)
    {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? 
                { ...cartItem , quantity : cartItem.quantity + 1 } 
                : cartItem
            )
    }

    return [...cartItems,{...itemToAdd,quantity : 1}]

}

export const deleteCartItem = (cartItems,itemToDelete) => {
   
    const deletedCartItems = cartItems.filter(cartItem => cartItem.id !== itemToDelete.id)
    
    return deletedCartItems
}

export const removeItemInCart = (cartItems,itemToRemove) => {

    const itemToReduceQuantity = cartItems.find(cartItem => cartItem === itemToRemove)

    if(itemToReduceQuantity)
    {
        return cartItems.map( cartItem => cartItem.id === itemToReduceQuantity.id ? 
                                {...cartItem , quantity : cartItem.quantity -1} : cartItem
                            )
    }

}