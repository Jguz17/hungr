import React from 'react'

class Step4 extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      if (this.props.currentStep !== 4) {
        return null;
      } 

      document.querySelector('#hidden-text').style.display = 'none'

      return(
        <div className='step-4'>
            <h1>What's your name?</h1>
            <input type='text' required placeholder='First Name'/>
            <input type='text' required placeholder='Last Name'/>
        </div>
     );
   }
}

export default Step4