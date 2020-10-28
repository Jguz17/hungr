import React, { useContext } from 'react'
import Alerts from '../Alerts'
import FormValidationContext from '../../../context/formValidation/formValidationContext'

const Step5 = (props) => {

      const formValidationContext = useContext(FormValidationContext)

      const { setFirstName, setLastName } = formValidationContext

      if (props.currentStep !== 5) {
        return null;
      } 

      if (document.querySelector('.cont-overlay')) {
        document.querySelector('.cont-overlay').style.height = '60%'
        document.querySelector('#hidden-text').style.display = 'none'
      }

      const onChange = (e) => {
        let first = document.querySelector('#firstName').value
        let last = document.querySelector('#lastName').value
        if (first && last !== '') {
          console.log(first)
          console.log(last)
          setFirstName(first)
          setLastName(last)
          props.validateName()
        }
        // props.validateName(first, last)
      }

      
      // document.querySelector('.cont-overlay').style.display = 'block'



      

      return(
        <div className='step-4'>
            <h1>What's your name?</h1>
            <input onChange={onChange} id='firstName' type='text' placeholder='First Name'/>
            <input style={{marginTop: '1.8rem', marginBottom: '1rem'}} onChange={onChange} id='lastName' type='text' placeholder='Last Name'/>
            <div style={{height: '40px', position: 'relative'}}>
              <Alerts/>
            </div>        
        </div>
     );
}

export default Step5