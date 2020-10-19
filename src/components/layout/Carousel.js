import React, { useState, useEffect, useContext } from 'react'
import Step1 from './carousel-steps/Step1'
import Step2 from './carousel-steps/Step2'
import Step3 from './carousel-steps/Step3'
import Step4 from './carousel-steps/Step4'
import Step5 from './carousel-steps/Step5'
import DisabledContext from '../../context/disabled/disabledContext'
import AlertContext from '../../context/alert/alertContext'
import FormValidationContext from '../../context/formValidation/formValidationContext'

const Carousel = (props) => {

    const [state, setState] = useState({
        currentStep: props.step    
    })

    const disabledContext = useContext(DisabledContext)
    const alertContext = useContext(AlertContext)
    const formValidationContext = useContext(FormValidationContext)

    const { setDisabled, disabledStatus } = disabledContext
    const { setAlert } = alertContext
    const { phone } = formValidationContext

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
        // let emailValidator = re.test(document.querySelector('#email-verification').value)
        if (disabledStatus === 'true' && document.querySelector('#phoneNumber').value.length >= 10) {
            setDisabled('false')
            document.querySelector('.cont-overlay').style.display = 'none';
            document.querySelector('#continue-button').addEventListener('click', () => {
                setDisabled('true')
                setState({
                    currentStep: 2
                })
            })
        }  
    }

    const validateCode = (code) => {
        if (disabledStatus === 'true' && code.length >= 4) {
            setDisabled('false')
            document.querySelector('.cont-overlay').style.display = 'none';
            document.querySelector('#continue-button').addEventListener('click', () => {
                setDisabled('true')
                setState({
                    currentStep: 3
                })
            })
        }
    }

    const validateEmail = (email) => {
        if (disabledStatus === 'true' && email) {
            setDisabled('false')
            document.querySelector('.cont-overlay').style.display = 'none';
            document.querySelector('#continue-button').addEventListener('click', () => {
                setDisabled('true')
                setState({
                    currentStep: 4
                })
            })
        } 
    }

    const validateName = (firstName, lastName) => {
        if (disabledStatus === 'true' && firstName && lastName) {
            setDisabled('false')
            document.querySelector('.cont-overlay').style.display = 'none';
            document.querySelector('#continue-button').addEventListener('click', () => {
                setDisabled('true')
                // setState({
                //     currentStep: 5
                // })
            })
        }
    }

    const contClick = () => {
        if (disabledStatus === 'true' && props.step === 1) {
            if (document.querySelector('#phoneNumber').value === '') {
                setAlert('Please enter your phone number', 'danger')
            } else if (document.querySelector('#phoneNumber').value.length < 10) {
                setAlert('Please enter a 10 digit phone number', 'danger')
            } 
        } else if (disabledStatus === 'true' && props.step === 2) {
            if (document.querySelector('#code-verification-1').value === '' || document.querySelector('#code-verification-2').value === '' || document.querySelector('#code-verification-3').value === '' || document.querySelector('#code-verification-4').value === '') {
                setAlert('Please enter verication code', 'danger')
            }
        } else if (disabledStatus === 'true' && props.step === 3) {
            const re = /\S+@\S+\.\S+/
            let emailValidator = re.test(document.querySelector('#email-verification').value)
            console.log(emailValidator)
            if (document.querySelector('#email-verification').value === '') {
                setAlert('Please enter your email address', 'danger')
            } else if (!emailValidator) {
                setAlert('Please enter a valid email address', 'danger') 
            }
        } else if (disabledStatus === 'true' && props.step === 4) {
            if (document.querySelector('#firstName').value === '' || document.querySelector('#lastName').value === '') {
                setAlert('Please enter all missing fields', 'danger')
            } 
        }
    }

    return (
        <div className='carousel'>
           <Step1 something={receiveSomething} currentStep={props.step} />
           <Step2 validateCode={validateCode} currentStep={props.step} />
           <Step3 validateEmail={validateEmail} currentStep={props.step} />
           <Step4 validateName={validateName} currentStep={props.step} />
           <Step5 currentStep={props.step} />
           <div  className='carousel-buttons'>
               {/* <button onClick={props.prev}>Prev</button> */}
               {/* <div onClick={carouselBtnClick} className='clickable' style={{position: 'absolute', width: '100%', height: '100%'}}></div> */}
               <button id='continue-button' onClick={props.next} style={{marginTop: '1rem'}}>Continue</button>
                <p id='hidden-text' style={{display: 'none'}}>Clicking continue agrees to our terms of service</p>
                {disabledStatus === 'true' ? <div onClick={contClick} className='cont-overlay'></div> : null}
           </div>
        </div>
    )
}

export default Carousel
