import React from 'react'
import MainHeader from '../layout/MainHeader'
import MainFooter from '../layout/MainFooter'
import HiddenForm from '../layout/HiddenForm'
const Home = () => {
    return (
        <div className='home-container'>
            <MainHeader/>
            <div className='food-container'>
                <div className='food-item' id='drink'>
                    <img src={require('../../images/drink.png')}/>
                </div>
                <div className='food-item' id='taco'>
                    <img src={require('../../images/tacos.png')}/>
                </div>
                <div className='food-item' id='wings'>
                    <img src={require('../../images/wings.png')}/>
                </div>
            </div>
            <MainFooter/>
            <HiddenForm/>
        </div>
    )
}

export default Home
