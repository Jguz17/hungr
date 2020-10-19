import React, { useState } from 'react'
import Alerts from '../Alerts'

const Step2 = (props) => {

    const [state, setState] = useState({
        verificationCode: ''
    })

      if (props.currentStep !== 2) {
        return null;
      } 


    const handleUp = (e) => {
        const target = e.srcElement || e.target;
        const maxLength = parseInt(target.attributes["maxlength"].value, 10);
        const myLength = target.value.length;
        if (myLength >= maxLength) {
            let next = target;
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
            while (previous = previous.previousElementSibling) {
                if (previous == null)
                    break;
                if (previous.tagName.toLowerCase() === "input") {
                    previous.focus();
                    break;
                }
            }
        }
    }

    let holder = ''

    const onChange = (e) => {
        // let holder = ''
        holder += e.target.value
        // setState({
        //     verificationCode: holder
        // })
        // let verificationCode = []
        // verificationCode
        props.something(holder)
    }

      return(
        <div className='step-2'>
            <h1>Enter the 4 digit code we sent you</h1>
            <p>Text sent to *Dynamic Number Here*</p>
            <Alerts/>
            <input onChange={onChange} id='code-verification-1' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='code-verification-2' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='code-verification-3' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='code-verification-4' type='phone' maxLength='1' size='1' onKeyUp={(e) => e.target.blur()}/>
        </div>
     );
}

export default Step2