import React from 'react'

class Step4 extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      if (this.props.currentStep !== 4) {
        return null;
      } 
      return(
        //   
        <div className='step-4'>
            <h1>What's your name?</h1>
            <p>Your email is used for updates</p>
            <input type='phone' required placeholder='hangry@hungr.com'/>
        </div>
     );
   }
}

export default Step4