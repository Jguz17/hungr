import React, { useState, useContext } from 'react'
import Carousel from './Carousel'
import DisabledContext from '../../context/disabled/disabledContext'
import AlertContext from '../../context/alert/alertContext'
import Alerts from './Alerts'


const Register = () => {

    const disabledContext = useContext(DisabledContext)
    const alertContext = useContext(AlertContext)

    const { setDisabled, disabledStatus } = disabledContext
    const { setAlert } = disabledContext

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
        if (state.step <= 3) {
            setState({
                step: state.step + 1
            })
        } else {
            console.log('trigg')
        } 
        document.querySelector('#hidden-text').style.display = 'none' 
        // document.querySelector('.cont-overlay').style.display = 'block'

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

    const sendStep = (num) => {
        setState({
            step: num 
        })
        console.log(state.step)
    }

    const handleClick = () => {
        setState({ step: 1 })
        setDisabled('true')
        // document.querySelector('.cont-overlay').style.display = 'block';
    }

    return (
        <div id='register-container' className='register-container hidden'>
            <div onClick={handleClick} className='close-container'>
                <i id='register-close' onClick={onClick} className="fas fa-times"></i>
            </div>
            <div style={{display: 'none', width: '100%'}}  id='carousel-container' >
                <Carousel sendStep={sendStep} prev={prev} next={next} step={state.step}/>
            </div>
        </div>
    )
}

export default Register
