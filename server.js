const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

if (process.env.Node_ENV !== 'production') 
{
    require('dotenv').config() // environment variables are accesible only in development and testing and adds to node environment
}


// using stripe to access the secret key from node environment
const stripe = require('stripe')(process.env.stripeSecretKey) 

const app = express()
const port = process.env.PORT || 5000 // if port assigned we use it or set it to 5000

app.use(bodyParser.json()) // parse any request's body to object from JSON
app.use(bodyParser.urlencoded({extended : true})) // filter out unnecessary symbols and spaces from request URL
app.use(cors()) // deny request from any other source to server 

if(process.env.Node_ENV === 'production')
{
    // builds static files needed when user hits the frontend (bundled html,css and js files)
    app.use(express.static(path.join(__dirname,'client/build')))
    
    // send the static files to user when they hit URL
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client/build','index.html')) 
    })
}

app.listen(port,error => { // listening to assigned port
    if(error) throw error
    console.log('Listening on port '+ port)
})

app.post('/payment',(req,res)=>{ //handle the payment request
    const body = {
        source : req.body.token.id,
        amount : req.body.amount,
        currency : 'INR'
    }

    stripe.charges.create(body,(stripeErr,stripeRes)=>{
        if(stripeErr)
        {
            res.status(505).send({error : stripeErr})
        }
        else
        {
            res.status(200).send({success : stripeRes})
        }
    })
})






