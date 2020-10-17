import React from 'react'

class Step1 extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      if (this.props.currentStep !== 1) {
        return null;
      } 
      return(
        <div className='step-1'>
            <h1>Enter your mobile phone number</h1>
            <p>We'll send you a verification code</p>
            <input type='phone' required placeholder='987-654-3210'/>
        </div>
     );
   }
}

export default Step1