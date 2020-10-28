import React, { useState, useContext } from 'react'
import PasswordStep1 from './steps/Password1'
import PasswordStep2 from './steps/Password2'
import AlertContext from '../../../context/alert/alertContext'

const PasswordCarousel = () => {

    const [state, setState] = useState({
        step: 1,
        verificationCodeResponse: ''
    })

    const alertContext = useContext(AlertContext)

    const { setAlert } = alertContext


    const next = () => {
        if (state.step <= 3) {
            setState({
                step: state.step + 1
            })
        } else {
            console.log('trigg')
        } 
    }

    const prev = () => {
        let currentStep = state.step;
        if (currentStep <= 1) {
          currentStep = 1;
        } else {
          currentStep = currentStep - 1;
        }
        
        setState({
          step: currentStep
        });
    }

    // if result: 0, email not found
//  else { 
// 1. email(api req to the forgot_password endpoint, response returns verification code)
// 2. validate code
// 3. new password/confirm password
// 4. confirm/take to login
// }

    const validateEmail = () => {
        const re = /\S+@\S+\.\S+/

        let email = document.querySelector('#forgot-password-email').value
        let emailValidator = re.test(email)

        if (emailValidator) {
            console.log(document.querySelector('#forgot-password-email').value)
            fetch("https://intapp.hungrapi.com/v2/account/forgot_password/", {
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
                if (data.result === 1) {
                    setAlert('Email not registered', 'danger')
                } else {
                    // set verification code to context
                    console.log(state)
                    console.log(data)
                    setState({
                        ...state,
                        verificationCodeResponse: data.verification_code
                    })
                    console.log(state)
                    document.querySelector('#password-next-step').className = 'password-step-2'
                    next()
                }
            })
        } 
    }

    const validateCode = (code) => {
        document.querySelector('.password-step-2').addEventListener('click', () => {
            if (code == state.verificationCodeResponse) {
                document.querySelector('#password-next-step').className = 'button-step-3'
                next()
            } else if (code != state.verificationCodeResponse) {
                setAlert('Please enter the correct verification code', 'danger')
            }
        })
    }

    const handleClick = () => {
        if (document.querySelector('#password-next-step').className === 'password-step-1') {
            const re = /\S+@\S+\.\S+/
            let emailValidator = re.test(document.querySelector('#forgot-password-email').value)
            if (document.querySelector('#forgot-password-email').value === '') {
                setAlert('Please enter your email address', 'danger')
            } else if (!emailValidator) {
                setAlert('Please enter a valid email address', 'danger')
            } else {
                validateEmail()
                // next()
            }
        } else if (document.querySelector('#password-next-step').className === 'password-step-2') {
            validateCode()
        }
    }

    return (
        <div id='password-carousel' className='password-carousel'>
            <PasswordStep1 validateEmail={validateEmail} step={state.step}/>
            <PasswordStep2 validateCode={validateCode} step={state.step}/>
            <button id='password-next-step' className='password-step-1' onClick={handleClick}>Next</button>
        </div>
    )
}

export default PasswordCarousel


