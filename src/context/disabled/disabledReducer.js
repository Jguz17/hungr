import {
    SET_DISABLED_OVERLAY,
    SET_DISABLED_SIGN_IN,
    SET_DISABLED_POST_REQUEST,
    SET_DISABLED_ICON
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_DISABLED_OVERLAY:
            // eslint-disable-next-line 
            return {
            ...state,
            overlay: action.payload
        }
        case SET_DISABLED_SIGN_IN:
            return {
                ...state,
                signInLink: action.payload
            }
        case SET_DISABLED_POST_REQUEST:
            return {
                ...state,
                postRequest: action.payload
            }
        case SET_DISABLED_ICON:
            return {
                ...state,
                disabledIcon: action.payload
                }
        default: 
            return state
    }
}