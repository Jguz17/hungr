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

    // eslint-disable-next-line 
    const [state, setState] = useState({
        currentStep: props.step,
        continue: false
    })

    const disabledContext = useContext(DisabledContext)
    const alertContext = useContext(AlertContext)
    const formValidationContext = useContext(FormValidationContext)

    const { setDisabled, 
            disabledStatus, 
            signInLink, 
            setDisabledSignIn,
            emailSignInLink,
            setDisabledEmailSignIn,
            setPhoneVerificationState,
            setDisabledIcon,
            
        } = disabledContext

    const { setAlert } = alertContext

    const { phone,
            setVerificationCode, 
            setPassword,
            setEmail,
            setFirstName,
            setLastName,
            createUser,
            setResponseVerificationCode,
            verificationCodeResponse,
            verificationCode,
            setUserId
         } = formValidationContext

    useEffect(() => {
        setDisabled('true')
        setDisabledSignIn('true')
        setPhoneVerificationState('false')
        setDisabledIcon('true')
        document.querySelector('#register-close').style.display = 'none'
        // setPhone
        // eslint-disable-next-line 
    },[])

    const receiveSomething = (something) => {

        if (disabledStatus === 'true' && props.step === 1) {
                if (document.querySelector('#phoneNumber').value.length >= 12 ) {
                    setDisabled('false')
                    document.querySelector('#continue-button').addEventListener('click', () => {

                        let userAgent = window.navigator.userAgent,
                        platform = window.navigator.platform,
                        iosPlatforms = ['iPhone', 'iPad', 'iPod']
                  
                        if (iosPlatforms.indexOf(platform) !== -1) {
                        fetch("https://intapp.hungrapi.com/v2/phone_verification/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            phone_number: phone,
                            phone_type: 'ios'
                        })
                        })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.result === 1) {
                            setAlert('Number already registered', 'danger')
                            setDisabled('true')
                            setDisabledSignIn('true')
                            setState({
                                ...state,
                                continue: false
                            })
                            setDisabledSignIn('false')
                        } else {
                            console.log(data)
                            setResponseVerificationCode(data.verification_code)
                            setDisabled('false')
                            setDisabledSignIn('false')
                            setUserId(data.userid)
                            setState({
                                ...state,
                                continue: true
                            })
                            props.next()
                            setDisabledSignIn('true')
                            setDisabled('true')
                                setState({
                                    currentStep: 2
                                })
                            if (document.querySelector('.cont-overlay')) {
                                document.querySelector('.cont-overlay').style.display = 'none';
                            }                
                //             document.querySelector('#continue-button').addEventListener('click', () => {
                //     setDisabled('true')
                //     // setState({
                //     //     currentStep: 2
                //     // })
                // })
                        }
                    })
                    setPhoneVerificationState('false')
            
                        } else if (/Android/.test(userAgent)) {
                        fetch("https://intapp.hungrapi.com/v2/phone_verification/", {
                            method: "POST",
                            headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                            phone_number: phone,
                            phone_type: 'android'
                            })
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.result === 1) {
                                setDisabled('true')
                                setDisabledSignIn('true')
                                setState({
                                    ...state,
                                    continue: false
                                })
                                setDisabledSignIn('false')
                                setAlert('Number already registered', 'danger')
                            } else {
                            console.log(data)
                            setResponseVerificationCode(data.verification_code)
                            setDisabled('false')
                            setDisabledSignIn('false')
                            setUserId(data.userid)
                            setState({
                                ...state,
                                continue: true
                            })
                            props.next()
                            setDisabledSignIn('true')
                            setDisabled('true')
                                setState({
                                    currentStep: 2
                                })
                            if (document.querySelector('.cont-overlay')) {
                                document.querySelector('.cont-overlay').style.display = 'none';
                            }
                // document.querySelector('#continue-button').addEventListener('click', () => {
                //     setDisabled('true')
                //     // setState({
                //     //     currentStep: 2
                //     // })
                // })
                            }
                        })
                        setPhoneVerificationState('false')          
                        } else {
                        fetch("https://intapp.hungrapi.com/v2/phone_verification/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            phone_number: phone
                        })
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.result === 1) {
                                setAlert('Number already registered', 'danger')
                                setDisabled('true')
                                setDisabledSignIn('true')
                                setState({
                                    ...state,
                                    continue: false
                                })
                                setDisabledSignIn('false')
                            } else {
                                console.log(data)
                                setResponseVerificationCode(data.verification_code)
                            setDisabled('false')
                            setDisabledSignIn('false')
                            setUserId(data.userid)
                            setState({
                                ...state,
                                continue: true
                            })
                            props.next()
                            setDisabledSignIn('true')
                            setDisabled('true')
                                setState({
                                    currentStep: 2
                                })
                            if (document.querySelector('.cont-overlay')) {
                                document.querySelector('.cont-overlay').style.display = 'none';
                            }                            
                            // document.querySelector('#continue-button').addEventListener('click', () => {
                                // setDisabled('true')
                                // setState({
                                //     currentStep: 2
                                // })
                            // })
                            }
                        })
                        setPhoneVerificationState('false')
                        }
                    })
                    
                    // ==== NEED THIS ====
                    // setState({
                    //     ...state,
                    //     continue: true
                    // })

                }
        }  
        if (document.querySelector('#phoneNumber').value) {
            setDisabledSignIn('false')
        } else {
            setDisabledSignIn('true')
        }

    }

    const validateCode = (code) => {
        // setVerificationCode(code)
            if (disabledStatus === 'true' && code.length >= 4) {
                    if (verificationCodeResponse == code) {
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
    }

    const validateEmail = (email) => {
        if (disabledStatus === 'true' && document.querySelector('#email-verification').value) {
            if (email) {
                setDisabled('false')
                setEmail(document.querySelector('#email-verification').value)
                document.querySelector('.cont-overlay').style.display = 'none';
                document.querySelector('#continue-button').addEventListener('click', () => {
                    setDisabled('true')
                    setState({
                        currentStep: 4
                    })
                })
            }

            console.log('email check fired off')

            fetch("https://intapp.hungrapi.com/v2/account/email_check/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.result === 1) {
                    setAlert('Email already registered', 'danger')
                    setDisabled('true')
                    setDisabledSignIn('true')
                } else {
                  setDisabled('false')
                  setDisabledSignIn('false')
                }
            })
        } 
        if (document.querySelector('#email-verification').value) {
            setDisabledEmailSignIn('false')
        } else {
            setDisabledEmailSignIn('true')
        }
    }

    const validatePassword = () => {

        if (disabledStatus === 'true' && (document.querySelector('#password').value.length >= 8 && document.querySelector('#password-2').value.length >= 8)) {
            if (document.querySelector('#password').value === document.querySelector('#password-2').value) {
                setDisabled('false')
                document.querySelector('.cont-overlay').style.display = 'none';
                document.querySelector('#continue-button').addEventListener('click', () => {
                    setDisabled('true')
                    setState({
                        currentStep: 5
                    })
                    if (document.querySelector('#password')) {
                        setPassword(document.querySelector('#password').value)
                    }
                })
            }
        }
    }

    const validateName = (firstName, lastName) => {
        if (disabledStatus === 'true' && document.querySelector('#firstName').value && document.querySelector('#lastName').value) {
            setDisabled('false')
            setFirstName(document.querySelector('#firstName').value)
            setLastName(document.querySelector('#lastName').value)
            document.querySelector('.cont-overlay').style.display = 'none';
            document.querySelector('#continue-button').addEventListener('click', () => {
                createUser()
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
            } else if (document.querySelector('#phoneNumber').value.length < 12) {
                setAlert('Please enter a 10 digit phone number', 'danger')
            } 
        } else if (disabledStatus === 'true' && props.step === 2) {
            if (document.querySelector('#code-verification-1').value === '' || document.querySelector('#code-verification-2').value === '' || document.querySelector('#code-verification-3').value === '' || document.querySelector('#code-verification-4').value === '') {
                setAlert('Please enter verication code', 'danger')
            } else if (verificationCode !== verificationCodeResponse) {
                setAlert('Please enter the correct verification code', 'danger')
            }
        } else if (disabledStatus === 'true' && props.step === 3) {
            const re = /\S+@\S+\.\S+/
            let emailValidator = re.test(document.querySelector('#email-verification').value)
            if (document.querySelector('#email-verification').value === '') {
                setAlert('Please enter your email address', 'danger')
            } else if (!emailValidator) {
                setAlert('Please enter a valid email address', 'danger') 
            } else if (document.querySelector('#email-verification').value.slice(-1) === 'q') {
                setAlert('Email already registered', 'danger') 
            }
        } else if (disabledStatus === 'true' && props.step === 4) {
            if (document.querySelector('#password').value.length >= 7) {
                setAlert('Password must be 8 characters long', 'danger')
            } else if (document.querySelector('#password').value !== document.querySelector('#password-2').value) {
                setAlert('Passwords don\'t match!', 'danger')
            } else if (document.querySelector('#password').value === '' || document.querySelector('#password-2').value === '') {
                setAlert('Please enter all missing fields', 'danger')
            }
        } else if (disabledStatus === 'true' && props.step === 5) {
            if (document.querySelector('#firstName').value === '' || document.querySelector('#lastName').value === '') {
                setAlert('Please enter all missing fields', 'danger')
            } 
        }
    }

    const userAlreadyExists = () => {
        props.closeRegister()

        const square = document.querySelector('#test')

        if (square.className.includes('hidden')) {
            square.className += 'animation-test notHidden'
            document.querySelector('#form-container').style.display = 'block'
        }
    }

    return (
        <div className='carousel'>
           <Step1 something={receiveSomething} currentStep={props.step} />
           <Step2 validateCode={validateCode} currentStep={props.step} />
           <Step3 validateEmail={validateEmail} currentStep={props.step} />
           <Step4 validatePassword={validatePassword} currentStep={props.step} />
           <Step5 validateName={validateName} currentStep={props.step} />
           <div  className='carousel-buttons'>
               <button id='continue-button' onClick={state.continue ? props.next : null} style={{marginTop: '1rem'}}>Continue</button>
                <div className='hidden-div'>
                    { signInLink === 'true' ? null : <p className='user-exists' style={{ zIndex: 2 }}>Already have an account with us? <span onClick={userAlreadyExists} id='take-to-sign-in'>Sign In</span></p>}
                </div>
                <p id='hidden-text' style={{display: 'none'}}>Clicking continue agrees to our terms of service</p>
                <div className='hidden-div'>
                    { emailSignInLink === 'true' ? null : <p className='user-exists' style={{ zIndex: 2 }}>Already have an account with us? <span onClick={userAlreadyExists} id='take-to-sign-in'>Sign In</span></p>}
                </div>
                {disabledStatus === 'true' ? <div onClick={contClick} className='cont-overlay'></div> : null}
           </div>
        </div>
    )
}

export default Carousel
