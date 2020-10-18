import React, { useState, useEffect, useContext } from 'react'
import Step1 from './carousel-steps/Step1'
import Step2 from './carousel-steps/Step2'
import Step3 from './carousel-steps/Step3'
import Step4 from './carousel-steps/Step4'
import DisabledContext from '../../context/disabled/disabledContext'
import AlertContext from '../../context/alert/alertContext'


const Carousel = (props) => {

    const [state, setState] = useState({
        currentStep: props.step,
    })

    const disabledContext = useContext(DisabledContext)
    const alertContext = useContext(AlertContext)

    const { setDisabled, disabledStatus } = disabledContext
    const { setAlert } = alertContext

    useEffect(() => {
        setDisabled('true')
        // if(disabledStatus === 'true') {

        // }
        // if (disabledStatus === 'true') {
        //     document.querySelector('#continue-button').disabled = true
        //     document.querySelector('#continue-button').style.opacity = '.5'
        // }
    },[])

    const receiveSomething = (something) => {
        if (something.length >= 10) {
            setDisabled('false')
            document.querySelector('.cont-overlay').style.display = 'none';
        }
    }

    const contClick = () => {
        // console.log(disabledStatus)
        if (disabledStatus === 'true') {
            if (document.querySelector('#phoneNumber').value === '') {
                setAlert('Please enter all fields', 'danger')
            } else if (document.querySelector('#phoneNumber').value.length < 10) {
                setAlert('Please enter a 10 digit phone number', 'danger')
            }
        }
    }

    let currentStep = state.currentStep

    return (
        <div className='carousel'>
           <Step1 something={receiveSomething} currentStep={props.step} />
           <Step2 something={receiveSomething} currentStep={props.step} />
           <Step3 something={receiveSomething} currentStep={props.step} />
           <Step4 something={receiveSomething} currentStep={props.step} />
           <div  className='carousel-buttons'>
               {/* <button onClick={props.prev}>Prev</button> */}
               {/* <div onClick={carouselBtnClick} className='clickable' style={{position: 'absolute', width: '100%', height: '100%'}}></div> */}
               <button id='continue-button' onClick={props.next}>Continue</button>
                <p id='hidden-text' style={{display: 'none'}}>Clicking continue agrees to our terms of service</p>
                <div onClick={contClick} className='cont-overlay'></div>
           </div>
        </div>
    )
}

export default Carousel
