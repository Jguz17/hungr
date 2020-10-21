import React, { useContext } from 'react'
import FormValidationContext from '../../../context/formValidation/formValidationContext'
import DisabledContext from '../../../context/disabled/disabledContext'
import Alerts from '../Alerts'

const Step1 = (props) => {

    const formValidationContext = useContext(FormValidationContext)
    const disabledContext = useContext(DisabledContext)

    const { setPhone, phone } = formValidationContext
    const { setDisabledIcon, setPhoneVerificationState, phoneState } = disabledContext

    if (props.currentStep !== 1) {
      return null;
    } 

    setDisabledIcon('true')

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

    if (document.querySelector('#continue-button') && phoneState === 'true') {

      document.querySelector('#continue-button').addEventListener('click', () => {

        let userAgent = window.navigator.userAgent,
              platform = window.navigator.platform,
              iosPlatforms = ['iPhone', 'iPad', 'iPod']
        
          if (iosPlatforms.indexOf(platform) !== -1) {
            // setPhoneVerificationState('false')
            fetch("https://intapp.hungrapi.com/v2/phone_verification-ios/", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              phone: phone,
            })
          })
          .then((res) => res.json())
          .then((data) => console.log(data))

          } else if (/Android/.test(userAgent)) {
            // setPhoneVerificationState('false')
            fetch("https://intapp.hungrapi.com/v2/phone_verification-android/", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              phone: phone,
            })
          })

          .then((res) => res.json())
          .then((data) => console.log(data))
          } else {
            // setPhoneVerificationState('false')
            fetch("https://intapp.hungrapi.com/v2/phone_verification/", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              phone: phone,
            })
          })

          .then((res) => res.json())
          .then((data) => console.log(data))
          }          
      })
      setPhoneVerificationState('false')
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