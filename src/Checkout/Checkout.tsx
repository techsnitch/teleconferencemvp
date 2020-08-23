import React, { Component } from 'react'
import PaymentDetails from './PaymentDetails'
import PlanFeatures from './PlanFeatures'
import Cart from './Cart'

export default class Checkout extends Component {
    render() {
        return (
            <div className ='checkout'>
                <div className='top'>
                    <p className= 'top'> Checkout </p>
                    <a href='#'>Choose a different plan</a>
                </div>
                <div className = 'checkout-body'>
                    <div className='box'>
                        <PaymentDetails/>
                        <Cart/>
                    </div>
                <div>
                    <PlanFeatures/>
                </div>
               
                </div>
                
            </div>
        )
    }
}


