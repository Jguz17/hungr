import React from 'react'

const MainFooter = () => {

    const registerClick = () => {
       const registerContainer = document.querySelector('#register-container')
       
       if (registerContainer.className.includes('hidden')) {
           registerContainer.className = 'register-container notHidden'
           document.querySelector('.register-phone-screen').style.display = 'block'
           document.querySelector('#register-close').style.display = 'block'
       }
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
