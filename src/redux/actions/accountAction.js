import { FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from "redux/actionTypes/accountActionType";
export const fetchProfileRequest = () => ({
    type: FETCH_PROFILE_REQUEST,
});

export const fetchProfileSuccess = (profile) => ({
    type: FETCH_PROFILE_SUCCESS,
    payload: profile,
});

export const fetchProfileFailure = (error) => ({
    type: FETCH_PROFILE_FAILURE,
    payload: error,
});