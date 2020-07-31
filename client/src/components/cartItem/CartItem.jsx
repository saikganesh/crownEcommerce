import React from "react"
import "./CartItem.scss"

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <img src = {props.item.imageUrl} className="cartItemImage" alt="item"/>
            <div className="itemDetails">
                <span className="name">{props.item.name}</span>
                <span className="quantity">Quantity - {props.item.quantity}</span>
                <span className="price">Price - ${props.item.quantity * props.item.price}</span>
            </div>
        </div>
    );
}

export default CartItem