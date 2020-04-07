import React from "react"
import "./CheckoutItem.scss"

import {connect} from "react-redux"
import {deleteCartItem,removeItem,addItem} from "../../redux/cart/cartActions"

const CheckoutItem = (props) => {
    return(
        <div className="checkoutItem">
            <div className="itemImage">
                <img src={props.item.imageUrl} alt="item"/>
            </div>
            <div className="itemName">{props.item.name}</div>
            <div className="itemQuantity">
                <div className="arrows" onClick={()=> props.item.quantity>=2 ? props.dispatch(removeItem(props.item)) 
                            : props.dispatch(deleteCartItem(props.item))}>&#10094;</div>
                <div className="value">{props.item.quantity}</div>
                <div className="arrows" onClick ={() => props.item.quantity >= 10 ? null : props.dispatch(addItem(props.item)) } >
                    &#10095;</div>
            </div>
            <div className="itemPrice">{props.item.quantity * props.item.price} </div>
            <div className="removeButton" onClick={() => props.dispatch(deleteCartItem(props.item))}>&#10005;</div>


        </div>
    );
}



export default connect()(CheckoutItem);