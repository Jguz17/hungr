import React, { useContext } from 'react'
import Alerts from '../../Alerts'
import AlertContext from '../../../../context/alert/alertContext'

const Password1 = (props) => {
    


    if (props.step !== 1) {
        return null;
    } 

    // const handleChange = (e) => {
    //     const re = /\S+@\S+\.\S+/
    //     let emailValidator = re.test(e.target.value)
    //     props.validateEmail(emailValidator)
    // }

    return (
        <div className='password-1'>
           <h1 style={{color: 'white'}}>Enter your email address</h1>
           <input id='forgot-password-email' type='email' placeholder='Email'/>
           <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>
        </div>
    )
}

// if result: 0, email not found
//  else { 
// 1. email(api req to the forgot_password endpoint, response returns verification code)
// 2. validate code
// 3. new password/confirm password
// 4. confirm/take to login
// }

export default Password1
