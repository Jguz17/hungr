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
        currentStep: props.step    
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
            phoneState,
            setDisabledIcon,
            
        } = disabledContext

    const { setAlert } = alertContext

    const { phone,
            setVerificationCode, 
            setPassword,
            setEmail,
            setFirstName,
            setLastName,
            createUser
         } = formValidationContext

    useEffect(() => {
        setDisabled('true')
        setDisabledSignIn('true')
        setPhoneVerificationState('false')
        setDisabledIcon('true')
        document.querySelector('#register-close').style.display = 'block'
        // setPhone
        // eslint-disable-next-line 
    },[])

    const receiveSomething = (something) => {

        if (disabledStatus === 'true' && document.querySelector('#phoneNumber').value.slice(-1) !== '0') {
                if (document.querySelector('#phoneNumber').value.length >= 12) {
                    setDisabled('false')
                    document.querySelector('#continue-button').addEventListener('click', () => {

                        console.log('phone validation sent')
              
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
                      .then((data) => console.log(data))
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
                        .then((data) => console.log(data))
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
                        .then((data) => console.log(data))
                        setPhoneVerificationState('false')
                        }
                    })
            
                document.querySelector('.cont-overlay').style.display = 'none';
                document.querySelector('#continue-button').addEventListener('click', () => {
                    setDisabled('true')
                    setState({
                        currentStep: 2
                    })
                })
                }
        }  
        if (document.querySelector('#phoneNumber').value.slice(-1) === '0') {
            setDisabledSignIn('false')
        } else {
            setDisabledSignIn('true')
        }

    }

    const validateCode = (code) => {
        if (disabledStatus === 'true' && code.length >= 4) {
            setVerificationCode(code)
            setDisabled('false')
            document.querySelector('.cont-overlay').style.display = 'none';
            document.querySelector('#continue-button').addEventListener('click', () => {
                setDisabled('true')
                setState({
                    currentStep: 3
                })
            })

            console.log('code verification sent')

            let userAgent = window.navigator.userAgent,
                            platform = window.navigator.platform,
                            iosPlatforms = ['iPhone', 'iPad', 'iPod']
                      
                        if (iosPlatforms.indexOf(platform) !== -1) {
                          fetch("https://intapp.hungrapi.com/v2/verification_code_check/", {
                          method: "POST",
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            verification_code: code,
                            phone_type: 'ios'
                          })
                        })
                      .then((res) => res.json())
                      .then((data) => console.log(data))
                      setPhoneVerificationState('false')
              
                        } else if (/Android/.test(userAgent)) {
                          fetch("https://intapp.hungrapi.com/v2/verification_code_check/", {
                            method: "POST",
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                              verification_code: phone,
                              phone_type: 'android'
                            })
                          })
                        .then((res) => res.json())
                        .then((data) => console.log(data))
                        setPhoneVerificationState('false')          
                      } else {
                          fetch("https://intapp.hungrapi.com/v2/verification_code_check/", {
                          method: "POST",
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            verification_code: code
                          })
                        })
                        .then((res) => res.json())
                        .then((data) => console.log(data))
                        setPhoneVerificationState('false')
                        }

        }
    }

    const validateEmail = (email) => {
        if (disabledStatus === 'true' && document.querySelector('#email-verification').value.slice(-1) !== 'q') {
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

            fetch("https://intapp.hungrapi.com/v2/email_check/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
        } 
        if (document.querySelector('#email-verification').value.slice(-1) === 'q') {
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
                setDisabled('true')
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
            } else if (phone.slice(-1) === '0') {
                setAlert('Number already registered', 'danger')
            }
        } else if (disabledStatus === 'true' && props.step === 2) {
            if (document.querySelector('#code-verification-1').value === '' || document.querySelector('#code-verification-2').value === '' || document.querySelector('#code-verification-3').value === '' || document.querySelector('#code-verification-4').value === '') {
                setAlert('Please enter verication code', 'danger')
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
               <button id='continue-button' onClick={props.next} style={{marginTop: '1rem'}}>Continue</button>
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
