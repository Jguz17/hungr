import React, { useReducer } from 'react'
import FormValidationContext from './formValidationContext'
import formValidationReducer from './formValidationReducer'
import {
    SET_PHONE_NUMBER,
    SET_VERIFICATION_CODE,
    SET_EMAIL_ADDRESS,
    SET_PASSWORD,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    // CLEAR_ALL
} from '../types'

const FormValidationState = (props) => {
    const initialState = {
        phone: '',
        verificationCode: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    const [state, dispatch] = useReducer(formValidationReducer, initialState)

    const { phone, email, password, firstName=document.querySelector('#firstName').value, lastName =document.querySelector('#lastName').value} = state

    const setPhone = (num) => {
        dispatch({
            type: SET_PHONE_NUMBER,
            payload: num
        })
    }

    const setVerificationCode = (text) => {
        dispatch({
            type: SET_VERIFICATION_CODE,
            payload: text
        })
    }

    const setPassword = (text) => {
        dispatch({
            type: SET_PASSWORD,
            payload: text
        })
    }

    const setEmail = (text) => {
        dispatch({
            type: SET_EMAIL_ADDRESS,
            payload: text
        })
    }

    const setFirstName = (text) => {
        dispatch({
            type: SET_FIRST_NAME,
            payload: text
        })
    }

    const setLastName = (text) => {
        dispatch({
            type: SET_LAST_NAME,
            payload: text
        })
    }

    const createUser = () => {

        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            iosPlatforms = ['iPhone', 'iPad', 'iPod']
        
        if (iosPlatforms.indexOf(platform) !== -1) {
            fetch("https://intapp.hungrapi.com/v2/create_new_account_ios/", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                zipcode: '',
                userid: ''
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))

        } else if (/Android/.test(userAgent)) {
            fetch("https://intapp.hungrapi.com/v2/create_new_account_android/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                zipcode: '',
                userid: ''
            })
            })
        .then((res) => res.json())
        .then((data) => console.log(data))
        } else {
            fetch("https://intapp.hungrapi.com/v2/phone_verification/", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                zipcode: '',
                userid: ''
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        }


    }

    return (
        <FormValidationContext.Provider value={{
            phone: state.phone,
            verificationCode: state.verificationCode,
            password: state.password,
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName,
            setPhone,
            setVerificationCode,
            setPassword,
            setEmail,
            setFirstName,
            setLastName,
            createUser
        }}>
            {props.children}
        </FormValidationContext.Provider>
    )
}

export default FormValidationState
