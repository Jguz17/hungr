import React, { useState, useEffect } from 'react'

const Register = () => {

    const [state, setState] = useState({
        phone: '',
        phoneVerificationCode: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const onClick = () => {
        const registerContainer = document.querySelector('#register-container')

        if (document.querySelector('.register-phone').className.includes('hide')) {
            document.querySelector('.register-phone').className = 'register-phone unhide'
        }
       
        if (registerContainer.className.includes('notHidden')) {
            registerContainer.className = 'register-container hidden'
            document.querySelector('.register-phone-screen').style.display = 'none'
            document.querySelector('#register-close').style.display = 'none'

            document.querySelector('.phoneVerification').style.display = 'none'
            document.querySelector('.phone-verification').style.display = 'none'

            document.querySelector('.register-email').style.display = 'none'
            document.querySelector('.email-form').style.display = 'none'

            document.querySelector('#register-name').style.display = 'none'
            document.querySelector('.name-form').style.display = 'none'
        }
 
    }

    const phoneChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const emailChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const phoneVerification = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submitPhone = (e) => {
        e.preventDefault()
        const phone = state.phone
        console.log(phone)

        setState({
            ...state,
            phone: ''
        })
        e.target.reset()

        const registerPhone = document.querySelector('.register-phone')
        const phoneVerificationForm = document.querySelector('.phone-verification')

        registerPhone.className = 'register-phone hide'
        phoneVerificationForm.className = 'phone-verification unhide'

        if (phoneVerificationForm.style.display === 'none') {
            phoneVerificationForm.style.display = 'block'
        }
        document.querySelector('.phoneVerification').style.display = 'block'
    }

    const submitPhoneVerification = (e) => {
        e.preventDefault()
        const verificationCode = state.phoneVerificationCode

        // console.log(verificationCode)

        setState({
            ...state,
            phoneVerificationCode: ''
        })

        e.target.reset()

        const phoneVerificationContainer = document.querySelector('.phone-verification')
        const registerEmailContainer = document.querySelector('.register-email')

        phoneVerificationContainer.className = 'phone-verification hide'
        registerEmailContainer.className = 'register-email unhide'

        if (registerEmailContainer.style.display === 'none') {
            registerEmailContainer.style.display = 'block'
        }
        document.querySelector('.email-form').style.display = 'block'
    }  

    const submitEmail = (e) => {
        e.preventDefault()

        const email = state.email

        setState({
            ...state,
            email: ''
        })

        e.target.reset()

        const registerEmailContainer = document.querySelector('.register-email')
        const registerNameContainer = document.querySelector('#register-name')

        registerEmailContainer.className = 'register-email hide'
        registerNameContainer.className = 'register-email unhide'

        if (registerNameContainer.style.display === 'none') {
            registerNameContainer.style.display = 'block'
        }

        document.querySelector('.name-form').style.display = 'block'
    }

    return (
        <div id='register-container' className='register-container hidden'>
            <div className='close-container'>
                <i id='register-close' onClick={onClick} className="fas fa-times"></i>
            </div>
            <div className='register-phone' style={{color: 'white'}}>
                <form onSubmit={submitPhone} className='register-phone-screen'>
                    <h1>Enter your mobile phone number</h1>
                    <p>We'll send you a verification code</p>
                        <div className='phone-input-container'>
                            <input onChange={phoneChange} name='phone' type='phone' placeholder='987-654-3210' required/>
                        </div>
                        <div className='phone-continue-container'>
                            <input name='phone' type='submit' value='Continue'/>
                        </div>
                </form>
            </div>

            <div className='phone-verification hide'>
                <form onSubmit={submitPhoneVerification} className='phoneVerification'>
                    <h1>Enter the 4-digit code sent to you</h1>
                    <input onChange={phoneVerification} type='text' placeholder='1234' name='phoneVerificationCode'/>
                    <input type='submit' value='Continue'/>
                    <p>Resend code</p>
                </form>
            </div>
       
            <div className='register-email hide'>
                <form onSubmit={submitEmail} className='email-form'>
                    <h1>What's your email</h1>
                    <input onChange={emailChange} type='email' placeholder='hangry@hungr.com' name='email' required/>
                    <button>Continue</button>
                    <p>Clicking continue agress to our terms of service</p>
                </form>
            </div>

            <div id='register-name' className='hide'>
                <form className='name-form'>
                    <h1>Enter your name</h1>
                    <input type='text' placeHolder='First Name' required/>
                    <input type='text' placeHolder='Last Name' required/>
                    <input type='submit' value='Continue'/>
                </form>
            </div>
        </div>
    )
}

export default Register
