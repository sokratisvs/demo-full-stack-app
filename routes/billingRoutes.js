const passport = require('passport');
const keys = require('../config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {

    app.post('/api/stripe', (req, res) => {

        console.log(req.body);

        // const charge = await stripe.charges.create({
        //     amount: 500,
        //     currency: "usd",
        //     source: req.body.id, // obtained with Stripe.js
        //     description: "5$ for 5 credits"
        //   });

          
   
   
    });

};