import React from 'react'

const Password2 = (props) => {

    if (props.step !== 2) {
        return null;
    } 

    return (
        <div>
            <p style={{color: 'white'}}>Password Step 2</p>
        </div>
    )
}

export default Password2
