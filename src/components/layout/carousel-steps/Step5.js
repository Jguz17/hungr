import React from 'react'

const Step5 = (props) => {

    if (props.currentStep !== 5) {
        return null;
      } 

      document.querySelector('.cont-overlay').style.display = 'block'


    return (
        <div className='step-4'>
            <h2>Thank you page</h2>
        </div>
    )
}

export default Step5
