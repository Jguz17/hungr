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



    const phoneT = document.getElementById('phoneNumber');

    if (phoneT) {
      phoneT.addEventListener("keydown", (e) => {
        if(e.key === "Backspace" || e.key === "Delete") return;
        if(e.target.value.length === 3) {
          phoneT.value = phoneT.value + "-";
        }
        if(e.target.value.length === 7) {
          phoneT.value = phoneT.value + "-";
        }
    })

    }

    

      return(
        <div className='step-1'>
            <form>
                <h1>Enter your mobile phone number</h1>
                <p>We'll send you a verification code</p>
                <input onChange={onChange} id='phoneNumber' type='tel' required placeholder='987-654-3210' maxLength='12'/>
            </form>
            <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>
        </div>
     );
}

export default Step1