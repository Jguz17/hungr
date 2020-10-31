import React from 'react'
import Alerts from '../../Alerts'

const Password3 = (props) => {

    if (props.step !== 3) {
        return null;
    } 

    return (
        <div className='password-3'>
            <h1>Enter your new password</h1>
            <input id='new-password' type='password' placeholder='New Password'/>
            <input id='confirm-password' type='password' placeholder='Confirm Password'/>
            <div style={{height: '40px', position: 'relative', width: '300px', margin: '0 auto'}}>
                <Alerts/>
            </div>
        </div>
    )
}

export default Password3
