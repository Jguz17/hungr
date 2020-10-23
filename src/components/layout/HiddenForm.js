import React, { useContext, useState } from 'react'
import Alerts from './Alerts'
import DisabledContext from '../../context/disabled/disabledContext'
import AlertContext from '../../context/alert/alertContext'

const HiddenForm = () => {

    // eslint-disable-next-line 
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const disabledContext = useContext(DisabledContext)
    const alertContext = useContext(AlertContext)

    const { setDisabled, disabledStatus } = disabledContext
    const { setAlert } = alertContext

    const onClick = () => {
        const square = document.querySelector('#test')

        if (square.className.includes('notHidden')) {
            square.className = 'animation-test hidden'
            document.querySelector('#form-container').style.display = 'none'
        } 
    }

    const validateUser = (e) => {
        const re = /\S+@\S+\.\S+/
        let emailValidator = re.test(document.querySelector('#email-login').value)
        console.log(emailValidator)
        if (disabledStatus === 'true') {
            if (emailValidator) {
                setDisabled('false')
                document.querySelector('#submit').addEventListener('click', (e) => {
                    e.preventDefault()
                    fetch('https://intapp.hungrapi.com/v2/account/login_check/', {
                        method: "POST",
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: document.querySelector('#email-login').value,
                            password: document.querySelector('#password-login').value,
                        })
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.result === 0) {
                            window.location ='https://www.google.com'
                        } else {
                            console.log(data.result)
                        }
                    })
                })
                // document.querySelector('.cont-overlay').style.backgroundColor = 'red';
            }
        }        
    }

    const contClick = () => {
        const re = /\S+@\S+\.\S+/
        let emailValidator = re.test(document.querySelector('#email-login').value)
        if (disabledStatus === 'true' && document.querySelector('#email-login').value === '') {
            setAlert('Please enter all missing fields', 'danger')
        } else if (disabledStatus === 'true' && (!emailValidator)) {
            setAlert('Please enter a valid email address', 'danger')
        } else if (disabledStatus === 'true' && document.querySelector('#password-login').value.length < 8) {
            setAlert('Please enter 8 characters or more for password', 'danger')
        } else if (disabledStatus === 'true' && document.querySelector('#password-login').value === '') {
            setAlert('Please enter all missing fields', 'danger')
        }
    }
    
    return (
        <div id='test' className='animation-test hidden'>
            <div id='form-container'>
                <form className='form'>
                    <h1 style={{textAlign: 'center', color: '#41b7e1'}}>Sign In</h1>
                    <input onChange={validateUser} id='email-login' type='email' placeholder='Email'/>
                    <input style={{marginTop: '2rem', marginBottom: '1.5rem'}} onChange={(e) => setState({password: e.target.value})} id='password-login' type='password' placeholder='Password'/>
                    <div style={{height: '40px', position: 'relative'}}>
                        <Alerts/>
                    </div>
                    <div className='form-buttons'>
                        <input style={{textAlign: 'center', zIndex: '2', marginRight: '2rem'}} id='back' onClick={onClick} type='button' value='Back'/>
                        <input id='submit' type='submit' value='Submit'/>
                        <br/>
                        <div className='help-container' style={{textAlign: 'center', zIndex: '3'}}>
                            <a id='help-link' href="mailto:someone@example.com">Help</a>
                        </div>
                    </div>
                </form>
            </div>
            {disabledStatus === 'true' ? <div style={{height: '40%', zIndex: '1'}} onClick={contClick} className='cont-overlay'></div> : null}
        </div>
    )
}

export default HiddenForm
