import React from 'react'
import Alerts from '../Alerts'

const Step4 = (props) => {

      if (props.currentStep !== 4) {
        return null;
      } 

      if (document.querySelector('.cont-overlay')) {
        document.querySelector('.cont-overlay').style.height = '60%'
        document.querySelector('#hidden-text').style.display = 'none'
      }

      const onChange = (e) => {
        let first = document.querySelector('#firstName').value
        let last = document.querySelector('#lastName').value

        props.validateName(first, last)
      }

      
      // document.querySelector('.cont-overlay').style.display = 'block'



      

      return(
        <div className='step-4'>
            <h1>What's your name?</h1>
            <input onChange={onChange} id='firstName' type='text' required placeholder='First Name'/>
            <input style={{marginTop: '1.8rem', marginBottom: '1rem'}} onChange={onChange} id='lastName' type='text' required placeholder='Last Name'/>
            <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>        
        </div>
     );
}

export default Step4