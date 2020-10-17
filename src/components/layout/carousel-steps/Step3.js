import React from 'react'

class Step3 extends React.Component {
    constructor(props) {
        super(props);
      }

    //   componentDidMount() {
          
    //   }

    render() {
      if (this.props.currentStep !== 3) {
        return null;
      } 
      document.querySelector('#hidden-text').style.display = 'block'
      return(
        <div className='step-3'>
            <h1>What's your email?</h1>
            <p>Your email is used for updates</p>
            <input type='email' required placeholder='hangry@hungr.com'/>
        </div>
     );
   }
}

export default Step3