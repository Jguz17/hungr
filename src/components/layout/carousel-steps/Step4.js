import React, { useState } from 'react'
import Alerts from '../Alerts'

const Step4 = (props) => {

      const [state, setState] = useState({
        fullName: ''
      })

      // componentDidMount() {
      // }

      if (props.currentStep !== 4) {
        return null;
      } 

      const onChange = (e) => {
        let first = document.querySelector('#firstName').value
        let last = document.querySelector('#lastName').value

        props.something(first, last)
      }

      document.querySelector('.cont-overlay').style.height = '65%'

      document.querySelector('#hidden-text').style.display = 'none'

      return(
        <div className='step-4'>
            <h1>What's your name?</h1>
            <Alerts/>
            <input onChange={onChange} id='firstName' type='text' required placeholder='First Name'/>
            <input onChange={onChange} id='lastName' type='text' required placeholder='Last Name'/>
        </div>
     );
}

export default Step4