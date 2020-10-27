import React from 'react'

const Password3 = () => {

    if (props.step !== 2) {
        return null;
    } 

    return (
        <div>
            <h1>Enter your new password</h1>
        </div>
    )
}

export default Password3
