import React from 'react'

const HiddenForm = () => {


    const onClick = () => {
        const square = document.querySelector('#test')

        if (square.className.includes('notHidden')) {
            square.className = 'animation-test hidden'
            document.querySelector('#form-container').style.display = 'none'
        } 
    }
    
    return (
        <div id='test' className='animation-test hidden'>
            <div id='form-container'>
                <form className='form'>
                    <h1 style={{textAlign: 'center', color: '#41b7e1'}}>Log In</h1>
                    <input type='email' placeholder='Email' required/>
                    <input type='password' placeholder='Password' required minLength='6'/>
                    <div className='form-buttons'>
                    <input style={{textAlign: 'center'}} id='back' onClick={onClick} type='button' value='Back'/>
                    <input id='submit' type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default HiddenForm
