import {
    SET_DISABLED_OVERLAY,
    SET_DISABLED_SIGN_IN
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
        default: 
            return state
    }
}