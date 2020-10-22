import React, {useReducer} from 'react';
import DisabledContext from './disabledContext';
import disabledReducer from './disabledReducer';
import { 
    SET_DISABLED_OVERLAY,
    SET_DISABLED_SIGN_IN,
    SET_DISABLED_POST_REQUEST,
    SET_DISABLED_ICON,
    SET_EMAIL_VERIFICATION_STATE,
    SET_PHONE_VERIFICATION_STATE
} from '../types';

const DisabledState = (props) => {
    const initialState = {
        overlay: 'true',
        signInLink: 'true',
        postRequest: 'false',
        disabledIcon: 'true',
        emailSignInLink: 'true',
        phoneState: 'false',
        emailState: 'false' 
    }

    const [state, dispatch] = useReducer(disabledReducer, initialState);

    const setDisabled = (text) => {
        try {
            dispatch({
                type: SET_DISABLED_OVERLAY,
                payload: text,
              })
        } catch (error) {   
            console.error(error.message)   
        }
    }

    const setDisabledSignIn = (text) => {
        try {
            dispatch({
                type: SET_DISABLED_SIGN_IN,
                payload: text
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    const setDisabledPostRequest = (text) => {
        try {
            dispatch({
                type: SET_DISABLED_POST_REQUEST,
                payload: text
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    const setDisabledIcon = (text) => {
        try {
            dispatch({
                type: SET_DISABLED_ICON,
                payload: text
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    const setDisabledEmailSignIn = (text) => {
        try {
            dispatch({
                type: SET_DISABLED_SIGN_IN,
                payload: text
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    const setPhoneVerificationState = (text) => {
        try {
            dispatch({
                type: SET_PHONE_VERIFICATION_STATE,
                payload: text
            })
        } catch (error) {
            console.error(error.message)
        }
    }   

    const setEmailVerificationState = (text) => {
        try {
            dispatch({
                type: SET_EMAIL_VERIFICATION_STATE,
                payload: text
            })
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <DisabledContext.Provider value={{
            disabledStatus: state.overlay,
            signInLink: state.signInLink,
            postRequest: state.postRequest,
            disabledIcon: state.disabledIcon,
            emailSignInLink: state.emailSignInLink,
            emailState: state.emailState,
            phoneState: state.phoneState,
            setDisabled,
            setDisabledSignIn,
            setDisabledPostRequest,
            setDisabledIcon,
            setDisabledEmailSignIn,
            setEmailVerificationState,
            setPhoneVerificationState
        }}>
        {props.children}
        </DisabledContext.Provider>
    )
}

export default DisabledState
