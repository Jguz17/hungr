import React, { useReducer } from 'react'
import FormValidationContext from './formValidationContext'
import formValidationReducer from './formValidationReducer'
import {
    SET_PHONE_NUMBER,
    SET_VERIFICATION_CODE,
    // SET_EMAIL_ADDRESS,
    // SET_FIRST_NAME,
    // SET_LAST_NAME,
    // CLEAR_ALL
} from '../types'

const FormValidationState = (props) => {
    const initialState = {
        phone: '',
        verificationCode: '',
        email: '',
        firstName: '',
        lastName: ''
    }

    const [state, dispatch] = useReducer(formValidationReducer, initialState)

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

    return (
        <FormValidationContext.Provider value={{
            phone: state.phone,
            verificationCode: state.verificationCode,
            setPhone,
            setVerificationCode
        }}>
            {props.children}
        </FormValidationContext.Provider>
    )
}

export default FormValidationState
