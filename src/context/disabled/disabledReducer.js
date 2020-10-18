import {
    SET_DISABLED,
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_DISABLED:
            return [...state], action.payload
        default: 
            return state
    }
}