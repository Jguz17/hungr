import {
    SET_DISABLED,
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_DISABLED:
            // eslint-disable-next-line 
            return [...state], action.payload
        default: 
            return state
    }
}