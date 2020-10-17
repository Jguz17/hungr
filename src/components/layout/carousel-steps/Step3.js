import React from 'react'

class Step3 extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      if (this.props.currentStep !== 3) {
        return null;
      } 
      return(
        <div>
            <h1>What's your email?</h1>
            <p>Your email is used for updates</p>
            <input type='phone' required placeholder='hangry@hungr.com'/>
        </div>
     );
   }
}

export default Step3