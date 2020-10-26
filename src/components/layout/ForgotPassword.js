import React from 'react'

const ForgotPassword = () => {
    return (
        <div id='forgotPasswordComp' className='forgotPasswordComp hide'>
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: '10%'}}>
                <input type='text' placeholder='Enter email'/>
                <input type='submit' value='submit'/>
            </div>
        </div>
    )
}

export default ForgotPassword
