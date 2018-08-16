import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from'../actions';
import '../App.css';

class Payment extends Component {
    render() {
        return (
            <StripeCheckout
            token={token => this.props.handleToken(token)}
            name="Emaily" // the pop-in header title
            description="Add credits to your account" 
            currency="USD"
            amount={500}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          >
          <button className="btn">Add credits</button>
          </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payment);