import React from 'react'
import Alerts from '../Alerts'

const Step4 = (props) => {

    if (props.currentStep !== 4) {
        return null;
      } 

      if (document.querySelector('.cont-overlay')) {
        document.querySelector('.cont-overlay').style.height = '60%'
        document.querySelector('#hidden-text').style.display = 'none'
        document.querySelector('.cont-overlay').style.display = 'block'
      }

      const onChange = () => {
        props.validatePassword()
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