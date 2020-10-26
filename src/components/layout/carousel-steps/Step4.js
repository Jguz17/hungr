import React, { useContext } from 'react'
import Alerts from '../Alerts'
import FormValidationContext from '../../../context/formValidation/formValidationContext'

const Step4 = (props) => {

    const formValidationContext = useContext(FormValidationContext)

    const { setPassword } = formValidationContext

    if (props.currentStep !== 4) {
        return null;
      } 

      if (document.querySelector('.cont-overlay')) {
        document.querySelector('.cont-overlay').style.height = '60%'
        document.querySelector('#hidden-text').style.display = 'none'
        document.querySelector('.cont-overlay').style.display = 'block'
      }

      const onChange = (e) => {
        let password1 = document.querySelector('#password').value
        let password2 = document.querySelector('#password-2').value

        if (password1.length >= 8 && password2.length >= 8) {
          if (password1 === password2) {
            setPassword(password1)
            props.validatePassword()
          }
        }
      }


    return (
      <div className='step-4'>
        <h1>Enter your password</h1>
        <input onChange={onChange} id='password' type='password' placeholder='Password'/>
        <input onChange={onChange} id='password-2' type='password' placeholder='Confirm Password' style={{marginBottom: '1rem'}}/>
        <div style={{height: '40px', position: 'relative'}}>
          <Alerts/>
        </div>          
      </div>
    )
}

export default Step4