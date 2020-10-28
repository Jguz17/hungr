import React from 'react'
import Alerts from '../../Alerts'

const Password2 = (props) => {

    if (props.step !== 2) {
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
        let codeIndex1 = document.querySelector('#password-code-verification-1').value
        let codeIndex2 = document.querySelector('#password-code-verification-2').value
        let codeIndex3 = document.querySelector('#password-code-verification-3').value
        let codeIndex4 = document.querySelector('#password-code-verification-4').value

        holder = codeIndex1 + codeIndex2 + codeIndex3 + codeIndex4

        if (holder.length >= 4) {
            props.validateCode(holder)
        }
    }

    return (
        <div>
            <h1 style={{color: 'white'}}>Enter the 4 digit code we sent you</h1>
            <h1>Enter the 4 digit code we sent you</h1>
            <input onChange={onChange} id='password-code-verification-1' type='phone' maxLength='1' size='1' onKeyUp={handleUp} autoFocus/>
            <input onChange={onChange} id='password-code-verification-2' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='password-code-verification-3' type='phone' maxLength='1' size='1' onKeyUp={handleUp}/>
            <input onChange={onChange} id='password-code-verification-4' type='phone' maxLength='1' size='1' onKeyUp={(e) => e.target.blur()}/>
            <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>
        </div>
    )
}

export default Password2
