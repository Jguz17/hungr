import React, {useReducer} from 'react';
import DisabledContext from './disabledContext';
import disabledReducer from './disabledReducer';
import {SET_DISABLED} from '../types';

const DisabledState = (props) => {
    const initialState = 'true'

    const [state, dispatch] = useReducer(disabledReducer, initialState);

    const setDisabled = (text) => {
        try {
            dispatch({
                type: SET_DISABLED,
                payload: text,
              })
        } catch (error) {   
            console.error(error.message)   
        }
    }

    return (
        <DisabledContext.Provider value={{
            disabledStatus: state,
            setDisabled
        }}>
        {props.children}
        </DisabledContext.Provider>
    )
}

export default DisabledState
