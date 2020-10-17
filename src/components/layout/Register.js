import React, { useState } from 'react'
import Carousel from './Carousel'

const Register = () => {

    const [state, setState] = useState({
        phone: '',
        phoneVerificationCode: '',
        email: '',
        firstName: '',
        lastName: '',
        color: '',
        hidden: 'true',
        step: 1
    })

    const onSubmit = () => {
        console.log('triggered')
    }

    const next = () => {
        if (state.step <= 4) {
            setState({
                step: state.step + 1
            })
        }       
        document.querySelector('#hidden-text').style.display = 'none' 
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

    const onClick = () => {

        const registerContainer = document.querySelector('#register-container')

        if (document.querySelector('.register-container').className.includes('hidden')) {
            document.querySelector('.register-container').className = 'register-container notHidden'
            document.querySelector('#register-close').style.display = 'block'

            setState({
                ...state,
                hidden: 'false'
            })
            document.querySelector('#carousel-container').style.display = 'block'
        } else if (registerContainer.className.includes('notHidden')) {
            registerContainer.className = 'register-container hidden'
            document.querySelector('#register-close').style.display = 'none'
            document.querySelector('#carousel-container').style.display = 'none'
            document.querySelector('#hidden-text').style.display = 'none'
            setState({
                ...state,
                hidden: 'true'
            })
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

    const sendStep = (num) => {
        setState({
            step: num 
        })
        console.log(state.step)
    }

    return (
        <div id='register-container' className='register-container hidden'>
            <div onClick={() => setState({ step: 1 })} className='close-container'>
                <i id='register-close' onClick={onClick} className="fas fa-times"></i>
            </div>
            <div style={{display: 'none', width: '100%'}}  id='carousel-container' >
                <Carousel sendStep={sendStep} prev={prev} next={next} step={state.step}/>
            </div>
        </div>
    )
}

export default Register
