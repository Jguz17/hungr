import React from 'react'
import MainHeader from '../layout/MainHeader'
import MainFooter from '../layout/MainFooter'
import HiddenForm from '../layout/HiddenForm'
import Register from '../layout/Register'
import ForgotPassword from '../layout/ForgotPassword'
const Home = () => {

    return (
        <div className='home-container'>
            <MainHeader/>
            <div className='food-container'>
                <div className='food-item' id='drink'>
                    <img alt='drink' src={require('../../images/drink.png')}/>
                </div>
                <div className='food-item' id='taco'>
                    <img alt='tacos' src={require('../../images/tacos.png')}/>
                </div>
                <div className='food-item' id='wings'>
                    <img alt='wings' src={require('../../images/wings.png')}/>
                </div>
            </div>
            <MainFooter/>
            <Register/>
            <HiddenForm/>
            <ForgotPassword/>
        </div>
    )
}

export default Home
