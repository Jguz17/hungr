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
       
        if (registerContainer.className.includes('notHidden')) {
            registerContainer.className = 'register-container hidden'
            document.querySelector('.register-phone-screen').style.display = 'none'
            document.querySelector('#register-close').style.display = 'none'
        }
 
    }

    const phoneChange = (e) => {
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
        document.querySelector('.phoneVerification').style.display = 'initial'
    }

    const submitPhoneVerification = (e) => {
        e.preventDefault()
        const verificationCode = state.phoneVerificationCode

        console.log(verificationCode)

        setState({
            ...state,
            phoneVerificationCode: ''
        })

        e.target.reset()

        const phoneVerificationContainer = document.querySelector('.phone-verification')

        phoneVerificationContainer.className = 'phone-verification hide'
    }  

    return (
        <div id='register-container' className='register-container hidden'>
            <i id='register-close' onClick={onClick} className="fas fa-times"></i>

            <div className='register-phone'>
                <form onSubmit={submitPhone} className='register-phone-screen'>
                    <h1>Enter your mobile phone number</h1>
                    <p>We'll send you a verification code</p>
                    <input onChange={phoneChange} name='phone' type='phone' placeholder='987-654-3210' required/>
                    <input type='submit' value='Continue'/>
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
        </div>
    )
}

export default Register
