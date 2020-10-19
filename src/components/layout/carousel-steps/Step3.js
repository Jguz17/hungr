import React from 'react'
import Alerts from '../Alerts'
const Step3 = (props) => {


    //   componentDidMount() {
          
    //   }

      if (props.currentStep !== 3) {
        return null;
      } 
      document.querySelector('#hidden-text').style.display = 'block'
      return(
        <div className='step-3'>
            <h1>What's your email?</h1>
            <p>Your email is used for updates</p>
            <Alerts/>
            <input id='email-verification' type='email' required placeholder='hangry@hungr.com'/>
        </div>
     );
}

export default Step3