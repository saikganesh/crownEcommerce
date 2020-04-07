import React from "react"
import "./CheckoutPage.scss"
import CheckoutItem from "../../components/checkoutItem/CheckoutItem"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartItems,findCartTotal} from "../../redux/cart/cartSelectors"

const CheckoutPage = (props) => {
    return(
        <div className="checkoutPage">
            <div className="checkoutHeader">
                <div className="headerBlock">
                    <span className="headerContent">Product</span>
                </div>
                <div className="headerBlock">
                    <span className="headerContent">Description</span>
                </div>
                <div className="headerBlock">
                    <span className="headerContent">Quantity</span>
                </div>
                <div className="headerBlock">
                    <span className="headerContent">Price</span>
                </div>
                <div className="headerBlock">
                    <span className="headerContent">Remove</span>
                </div>
            </div>
                {
                    props.cartItems.map(cartItem=> {
                        return <CheckoutItem key={cartItem.id} item={cartItem}/>
                    })
                }
            <div>
                <span className="total"> TOTAL : ${props.cartTotal}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal : findCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)