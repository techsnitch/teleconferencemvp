import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                <div className='cart-header'>
                    <p>Landen Lite</p>
                </div>
                <div className='bill'>
                    <p>Billed now: $15.00 USD</p>
                </div>
                <div className='cart-body'>
                    <p>
                        You'll be charged $15.00 USD monthly until <br/>  you cancel
                        your subscription. You can get a <br/> refund within 14 days
                        of starting your <br/> subscription.
                    </p>
                    <div className='cart-btn' >
                    <button type='submit'>Buy Now</button>
                    </div>
                    
                </div>

            </div>
        )
    }
}
