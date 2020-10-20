import React, { useContext } from 'react'
import Alerts from '../Alerts'

const Step3 = (props) => {


      if (props.currentStep !== 3) {
        return null;
      } 

      const onChange = (e) => {
        const re = /\S+@\S+\.\S+/
        let emailValidator = re.test(e.target.value)
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