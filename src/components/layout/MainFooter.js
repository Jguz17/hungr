import React, { useContext } from 'react'
import DisabledContext from '../../context/disabled/disabledContext'

const MainFooter = () => {

    const disableContext = useContext(DisabledContext)

    const { emailState, setEmailVerificationState } = disableContext

    const registerClick = () => {
        // if (document.querySelector('#phoneNumber').value.length < 10) {
        // }
        setEmailVerificationState('true')
       const registerContainer = document.querySelector('#register-container')
       registerContainer.className = 'register-container notHidden'
       document.querySelector('#register-close').style.display = 'block'
       document.querySelector('#carousel-container').style.display = 'block'
    }

    const onClick = () => {
        const square = document.querySelector('#test')

        if (square.className.includes('hidden')) {
            square.className += 'animation-test notHidden'
            document.querySelector('#form-container').style.display = 'block'
        } 
    }

    return (
        <div className='footer-container'>
            <button onClick={registerClick} id='register'>Get Started</button>
            <p onClick={onClick}>Already a member? Sign in</p>
        </div>
    )
}

export default MainFooter
