import React from 'react'

const Password3 = (props) => {

    if (props.step !== 3) {
        return null;
    } 

    return (
        <div className='password-3'>
            <h1>Enter your new password</h1>
            <input id='new-password' type='password' placeholder='New Password'/>
            <input id='confirm-password' type='password' placeholder='Confirm Password'/>
        </div>
    )
}

export default Password3
