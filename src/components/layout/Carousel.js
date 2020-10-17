import React, { useState, useEffect } from 'react'
import Step1 from './carousel-steps/Step1'
import Step2 from './carousel-steps/Step2'
import Step3 from './carousel-steps/Step3'
import Step4 from './carousel-steps/Step4'


const Carousel = (props) => {

    const [state, setState] = useState({
        currentStep: props.step,
    })

    const receiveSomething = (something) => {
        
    }

    let currentStep = state.currentStep

    return (
        <div className='carousel'>
           <Step1 something={receiveSomething} currentStep={props.step} />
           <Step2 something={receiveSomething} currentStep={props.step} />
           <Step3 something={receiveSomething} currentStep={props.step} />
           <Step4 something={receiveSomething} currentStep={props.step} />
           <div className='carousel-buttons'>
               {/* <button onClick={props.prev}>Prev</button> */}
               <button onClick={props.next}>Continue</button>
                <p id='hidden-text' style={{display: 'none'}}>Clicking continue agrees to our terms of service</p>
           </div>
        </div>
    )
}

export default Carousel
