import React, { useState, useContext } from 'react'
import Carousel from './Carousel'
import DisabledContext from '../../context/disabled/disabledContext'

const Register = () => {

    const disabledContext = useContext(DisabledContext)

    const { setDisabled, disabledIcon, setDisabledIcon } = disabledContext

    const [state, setState] = useState({
        phone: '',
        phoneVerificationCode: '',
        email: '',
        firstName: '',
        lastName: '',
        color: '',
        hidden: 'true',
        step: 1
    }, [])

    const next = () => {
        if (state.step <= 5) {
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

        setState({ step: 1 })
        setDisabled('true')
        setDisabledIcon('true')

        const registerContainer = document.querySelector('#register-container')

        if (document.querySelector('.register-container').className.includes('hidden')) {
            document.querySelector('.register-container').className = 'register-container notHidden'
            document.querySelector('#register-close').style.display = 'block'

            setState({
                ...state,
                hidden: 'false',
                step: 1
            })
            document.querySelector('#carousel-container').style.display = 'block'
        } else if (registerContainer.className.includes('notHidden')) {
            registerContainer.className = 'register-container hidden'
            if(document.querySelector('#register-close')) {
                document.querySelector('#register-close').style.display = 'none'
            }
            document.querySelector('#carousel-container').style.display = 'none'
            document.querySelector('#hidden-text').style.display = 'none'
            setState({
                ...state,
                hidden: 'true',
                step: 1
            })
        }
 
    }

    

    const sendStep = (num) => {
        setState({
            step: num 
        })
        console.log(state.step)
    }

    return (
        <div id='register-container' className='register-container hidden'>
            { disabledIcon === 'true' ? <div className='close-container'>
                <i id='register-close' onClick={onClick} className="fas fa-times"></i>
            </div> : <div>
                    <i id='register-arrow' onClick={prev} className="fas fa-arrow-left"></i>
                </div>}
            <div style={{display: 'none', width: '100%'}}  id='carousel-container' >
                <Carousel closeRegister={onClick} sendStep={sendStep} prev={prev} next={next} step={state.step}/>
            </div>
        </div>
    )
}

export default Register
