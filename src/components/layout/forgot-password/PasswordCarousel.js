import React, { useState, useContext } from 'react'
import PasswordStep1 from './steps/Password1'
import PasswordStep2 from './steps/Password2'
import PasswordStep3 from './steps/Password3'
import AlertContext from '../../../context/alert/alertContext'

const PasswordCarousel = () => {

    const [state, setState] = useState({
        step: 1,
        verificationCodeResponse: '',
        email: '',
        password: '',
        userid: ''
    })

    const user = {}

    let userid = ''

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

    const validateEmail = (userEmail) => {
        // document.querySelector('#password-next-step').className = 'password-step-2'
        // next()
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
                    user.verificationCodeResponse = data.code
                    user.email = userEmail
                    user.userid = data.dn
                    userid = data.dn

                    setState({
                        ...state,
                        verificationCodeResponse: data.code,
                        email: userEmail,
                        userid: data.dn

                    })
                    console.log(state)
                    document.querySelector('#password-next-step').className = 'password-step-2'
                    next()
                }
            })
        } 
    }

    const validateCode = (code) => {
        // document.querySelector('#password-next-step').className = 'password-step-3'
        // next()
        // document.querySelector('.password-step-2').addEventListener('click', () => {
            if (code == state.verificationCodeResponse) {
                document.querySelector('#password-next-step').className = 'password-step-3'
                next()
            } else if (code != state.verificationCodeResponse) {
                setAlert('Please enter the correct verification code', 'danger')
            }
        // })
    }

    const validatePassword = () => {
        // console.log(document.querySelector('#new-password').value)
        user.password = document.querySelector('#new-password').value
        console.log(user)
        fetch("https://intapp.hungrapi.com/v2/account/resetpassword/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email,
                    userid: user.userid,
                    password: user.password
                })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        // let x = 0
        // document.querySelector('.password-step-3').addEventListener('click', () => {
        //     if (x < 1) {
        //         fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        //         .then((res) => res.json())
        //         .then((data) => {
        //             if (data) {
        //                 console.log(data)
        //             }
        //         })
        //         // console.log(document.querySelector('#confirm-password').value)
        //     } 
        //     x++
        // })
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
            if (document.querySelector('#password-code-verification-1').value === '' || document.querySelector('#password-code-verification-2').value === '' || document.querySelector('#password-code-verification-3').value === '' || document.querySelector('#password-code-verification-4').value === '') {
                setAlert('Please enter verication code', 'danger')
            } else {
                validateCode()
            }
        } else if (document.querySelector('#password-next-step').className === 'password-step-3') {
            if (document.querySelector('#new-password').value === '' || document.querySelector('#confirm-password').value === '') {
                setAlert('Please enter your new password', 'danger')
            } else if (document.querySelector('#new-password').length <= 7 || document.querySelector('#confirm-password').value.length <= 7) {
                setAlert('Please enter a password with 8 characters', 'danger') 
            } else if (document.querySelector('#new-password').value !== document.querySelector('#confirm-password').value) {
                setAlert('Passwords do not match', 'danger')
            } else {
                validatePassword()
            }
        }
    }

    const onClick = () => {

        setState({ step: 1 })
        // setDisabled('true')
        // setDisabledIcon('true')

        const forgotPasswordContainer = document.querySelector('#forgotPasswordComp')

        if (document.querySelector('#forgotPasswordComp').className.includes('hidden')) {
            document.querySelector('#forgotPasswordComp').className = 'forgotPasswordComp notHidden'
            document.querySelector('#password-close').style.display = 'block'
            // document.querySelector('#password-close').style.display = 'block'

            // document.querySelector('#password-close').style.display = 'block'

            setState({
                ...state,
                // hidden: 'false',
                step: 1
            })
            document.querySelector('#forgotPasswordComp').style.display = 'block'
        } else if (forgotPasswordContainer.className.includes('notHidden')) {
            forgotPasswordContainer.className = 'forgotPasswordComp hidden'
            if(document.querySelector('#password-close')) {
                document.querySelector('#password-close').style.display = 'none'
            }
            document.querySelector('#forgotPasswordComp').style.display = 'none'
            // document.querySelector('#hidden-text').style.display = 'none'
            setState({
                ...state,
                // hidden: 'true',
                step: 1
            })
        }
 
    }

    return (
        <div id='password-carousel' className='password-carousel'>
            <i onClick={onClick} id='password-close' className="fas fa-times"></i>
            <PasswordStep1 validateEmail={validateEmail} step={state.step}/>
            <PasswordStep2 validateCode={validateCode} step={state.step}/>
            <PasswordStep3 step={state.step}/>
            <button id='password-next-step' className='password-step-1' onClick={handleClick}>Next</button>
        </div>
    )
}

export default PasswordCarousel


