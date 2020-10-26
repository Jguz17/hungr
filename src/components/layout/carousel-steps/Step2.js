import React, { useContext, useEffect, useState } from 'react'
import Alerts from '../Alerts'
import FormValidationContext from '../../../context/formValidation/formValidationContext'
import DisabledContext from '../../../context/disabled/disabledContext'

const Step2 = (props) => {

    const formValidationContext = useContext(FormValidationContext)
    const disabledContext = useContext(DisabledContext)

    const { phone, setPhone, setVerificationCode } = formValidationContext

    const { setDisabledIcon } = disabledContext

    const [state, setState] = useState({
        verCode: ''
    })

    useEffect(() => {
        setDisabledIcon('false')
                // eslint-disable-next-line 
    }, [])

      if (props.currentStep !== 2) {
        return null;
      } 

    const handleUp = (e) => {
        const target = e.srcElement || e.target;
        const maxLength = parseInt(target.attributes["maxlength"].value, 10);
        const myLength = target.value.length;
        if (myLength >= maxLength) {
            let next = target;
            // eslint-disable-next-line 
            while (next = next.nextElementSibling) {
                if (next == null)
                    break;
                if (next.tagName.toLowerCase() === "input") {
                    next.focus();
                    break;
                }
            }
        }
        // Move to previous field if empty (user pressed backspace)
        else if (myLength === 0) {
            let previous = target;
            // eslint-disable-next-line 
            while (previous = previous.previousElementSibling) {
                if (previous == null) {
                    break;
                }
                if (previous.tagName.toLowerCase() === "input") {
                    previous.focus();
                    break;
                }
            }
        }
    }

    let holder = ''

    const onChange = (e) => {
        let codeIndex1 = document.querySelector('#code-verification-1').value
        let codeIndex2 = document.querySelector('#code-verification-2').value
        let codeIndex3 = document.querySelector('#code-verification-3').value
        let codeIndex4 = document.querySelector('#code-verification-4').value

        holder = codeIndex1 + codeIndex2 + codeIndex3 + codeIndex4

        if (holder.length == 4) {
            setVerificationCode(holder)
            props.validateCode(holder)
        }
    }

      return(
        <div className='step-2'>
            <h1>Enter the 4 digit code we sent you</h1>
            <p>Text sent to {phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}</p>
            <input onChange={onChange} id='code-verification-1' type='phone' maxLength='1' size='1' onKeyUp={handleUp} autoFocus/>
            <input onChange={onChange} id='code-verification-2' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='code-verification-3' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='code-verification-4' type='phone' maxLength='1' size='1' onKeyUp={(e) => e.target.blur()}/>
            <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>
        </div>
     );
}

export default Step2