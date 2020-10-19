import React, { useContext } from 'react'
import FormValidationContext from '../../../context/formValidation/formValidationContext'
import Alerts from '../Alerts'

const Step1 = (props) => {

    const formValidationContext = useContext(FormValidationContext)

    const { setPhone, phone } = formValidationContext

    if (props.currentStep !== 1) {
      return null;
    } 

    const onChange = (e) => {
      let changer = e.target.value
      setPhone(changer)
      props.something(phone)
    }

      return(
        <div className='step-1'>
            <form>
                <h1>Enter your mobile phone number</h1>
                <p>We'll send you a verification code</p>
                <Alerts/>
                <input onChange={onChange} id='phoneNumber' type='tel' required placeholder='987-654-3210' maxLength='10'/>
            </form>
        </div>
     );
}

export default Step1