import React, { Component } from 'react'
import check from '../Assets/check.svg'

export default class PlanFeatures extends Component {
    render() {
        return (
            <div className='features'>
                <div className= 'left-features'>
                    <div className='feature'>
                    <div>
                            <img src= {check} /> 
                        </div>
                        <div>
                        <p className='features-heading'> Remove all Landen Branding</p>
                            <p >Once you purchase your site you can remove all "Made <br/> 
                            with Landen" branding from your site. </p> 
                        </div>
                              
                    </div>
                    <div className='feature'>
                        <div>
                            <img src= {check} /> 
                        </div>
                            <div>
                            <p className='features-heading'> Cancel Anytime</p>
                            <p>You can cancel or switch to a different tier at  <br/> 
                            any time through the Landen dashboard. </p>   
                            </div>
                            
                    </div>
                </div>
                <div className= 'right-features'>
                <div className='feature'>
                <div>
                            <img src= {check} /> 
                        </div>
                        <div>
                        <p className='features-heading'>Use custom domains</p>
                            <p>Use your own domains and subdomains with your <br/> 
                            Landen sites. </p> 
                        </div>
                              
                    </div>
                    <div className='feature'>
                    <div>
                            <img src= {check} /> 
                        </div>
                        <div>
                            <p className='features-heading'>Hosting included</p>
                            <p>You can host your sites via Landen and publish them <br/> 
                            with one click. </p> 
                        </div>
                              
                    </div>
                </div>
                
            </div>
        )
    }
}
