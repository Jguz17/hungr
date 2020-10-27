import React from 'react'

const Password2 = (props) => {

    if (props.step !== 2) {
        return null;
    } 

    return (
        <div>
            <h1 style={{color: 'white'}}>Enter the 4 digit code we sent you</h1>
        </div>
    )
}

export default Password2
