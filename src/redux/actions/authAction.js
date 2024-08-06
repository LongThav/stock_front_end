// src/redux/actions/authActions.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actionTypes/authActionType';

export const login = (credentials, callback) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
    callback, // Include the callback
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});


export const register = (credentials, callback) => ({
    type: REGISTER_REQUEST,
    payload: credentials,
    callback, // Include the callback
});

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
});

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
});