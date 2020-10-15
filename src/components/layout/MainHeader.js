import React from 'react'
import Logo from './Logo'

const MainHeader = () => {
    return (
        <div className='header'>
            <Logo/>
            <p style={{color: '#fff'}}>Order food anywhere</p>
        </div>
    )
}

export default MainHeader
