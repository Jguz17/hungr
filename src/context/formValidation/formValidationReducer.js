import {
    SET_PHONE_NUMBER,
    SET_VERIFICATION_CODE,
    SET_EMAIL_ADDRESS,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    CLEAR_ALL
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_PHONE_NUMBER:
            return {...state,
            phone: action.payload
        }
        default:
            return state
    }
}