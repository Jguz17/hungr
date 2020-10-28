import {
    SET_PHONE_NUMBER,
    SET_VERIFICATION_CODE,
    SET_EMAIL_ADDRESS,
    SET_PASSWORD,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_VERIFICATION_CODE_RESPONSE,
    SET_FORGOT_PASSWORD_CODE
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_PHONE_NUMBER:
            return {...state,
            phone: action.payload.replace(/-/g, "")
        }
        case SET_VERIFICATION_CODE: 
            return {
                ...state,
                verificationCode: action.payload
            }
        case SET_EMAIL_ADDRESS:
            return {
                ...state,
                email: action.payload
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            }
        case SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload
            }
        case SET_VERIFICATION_CODE_RESPONSE:
            return {
                ...state,
                verificationCodeResponse: action.payload
            }
        case SET_FORGOT_PASSWORD_CODE:
            return {
                ...state,
                forgotPasswordCode: action.payload
            }
        default:
            return state
    }
}