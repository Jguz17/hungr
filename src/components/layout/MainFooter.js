import React from 'react'

const MainFooter = () => {

    const onClick = () => {
        const square = document.querySelector('#test')

        if (square.className.includes('hidden')) {
            square.className += 'animation-test notHidden'
            document.querySelector('#form-container').style.display = 'block'

            // square.style.opacity = '100%'
            // square.style.transform = 'translateX(0) translateY(0)%'
            // square.style.height = 'translateX(0) translateY(0)%'
            // square.style.transform = 'translateX(0) translateY(0)%'

        } 
    }

    return (
        <div className='footer-container'>
            <button id='register'>Get Started</button>
            <p onClick={onClick}>Already a member? Sign in</p>
        </div>
    )
}

export default MainFooter
