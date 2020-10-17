import React, { useState, useEffect } from 'react'
import Step1 from './carousel-steps/Step1'
import Step2 from './carousel-steps/Step2'
import Step3 from './carousel-steps/Step3'
import Step4 from './carousel-steps/Step4'


const Carousel = (props) => {

    const [state, setState] = useState({
        currentStep: props.step
    })

    // useEffect(() => {
    //     setState({
    //         currentStep: props.step
    //     })
    //     console.log(props)
    // }, [])

    // const next = () => {
    //     if (state.currentStep <= 3) {
    //         setState({
    //             currentStep: state.currentStep + 1
    //         })
    //     }

    //     props.sendStep(state.currentStep)
        
    // }

    // const prev = () => {
    //     let currentStep = state.currentStep;
    //     if (currentStep <= 1) {
    //       currentStep = 1;
    //     } else {
    //       currentStep = currentStep - 1;
    //     }
        
    //     setState({
    //       currentStep: currentStep
    //     });

    //     props.sendStep(state.currentStep)

    // }

    let currentStep = state.currentStep

    return (
        <div className='carousel'>
           <Step1 currentStep={props.step} />
           <Step2 currentStep={props.step} />
           <Step3 currentStep={props.step} />
           <Step4 currentStep={props.step} />
           <div className='carousel-buttons'>
               {/* <button onClick={props.prev}>Prev</button> */}
               <button onClick={props.next}>Continue</button>
                <p id='hidden-text' style={{display: 'none'}}>Clicking continue agrees to our terms of service</p>
           </div>
        </div>
    )
}

export default Carousel
