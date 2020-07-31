import React from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios'

const StripeButton = (props) => {
    const stripePrice = props.price*100
    const publicApiKey = "pk_test_MPlWMXFK724oCcfWU868YrXr0014Yc14Gp"

    const onToken = (token) => {
        axios({
            url :'payment',
            method : 'post',
            data : {
                amount :stripePrice,
                token,
            }
        }).then(resp => console.log(resp)).catch(error => console.log(error))
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