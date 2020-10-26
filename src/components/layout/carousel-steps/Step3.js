import React, { useContext } from 'react'
import Alerts from '../Alerts'
import FormValidationContext from '../../../context/formValidation/formValidationContext'

const Step3 = (props) => {
  
  const formValidationContext = useContext(FormValidationContext)
  const { setEmail } = formValidationContext

      if (props.currentStep !== 3) {
        return null;
      } 

      const onChange = (e) => {
        const re = /\S+@\S+\.\S+/
        let emailValidator = re.test(e.target.value)
        let userEmail = e.target.value
        setEmail(userEmail)
        props.validateEmail(emailValidator)
      }


      document.querySelector('#hidden-text').style.display = 'block'

      return(
        <div className='step-3'>
            <h1>What's your email?</h1>
            <p>Your email is used for updates</p>
            <input onChange={onChange} id='email-verification' type='email' required placeholder='hangry@hungr.com'/>
            <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>
        </div>
     );
}

export default Step3