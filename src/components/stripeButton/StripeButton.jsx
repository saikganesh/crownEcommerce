import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeButton = (props) => {
    const stripePrice = props.price*100
    const publicApiKey = "pk_test_MPlWMXFK724oCcfWU868YrXr0014Yc14Gp"

    const onToken = (token) => {
        console.log(token)
        alert("payment successful")
    }

    return <StripeCheckout 
        name = "CROWN Enterprises"
        description = {`Your total is $${props.price}`}
        panelLabel = "Pay Now"
        billingAddress
        shippingAddress
        image = "https://sendeyo.com/up/d/f3eb2117da"
        amount = {stripePrice}
        token = {onToken}
        stripeKey={publicApiKey}
        currency="INR"
    />    
}

export default StripeButton