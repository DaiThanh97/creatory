import {
    GET_INFO,
    GET_INFO_SAGA,
    LOADING_SIGNIN,
    SIGN_IN,
    SIGN_IN_SAGA
} from "../constants/user.constant";

// =============================== ACTION REDUCER =======================================
export const signInAct = (payload) => ({
    type: SIGN_IN,
    payload
});

export const getInfoAct = (total, list) => ({
    type: GET_INFO,
    payload: { total, list }
});

export const loadingSignInAct = (payload) => ({
    type: LOADING_SIGNIN,
    payload
});


// ================================== ACTION SAGA =======================================
export const signInActSaga = (payload) => ({
    type: SIGN_IN_SAGA,
    payload
});

export const getInfoActSaga = (offset, limit) => ({
    type: GET_INFO_SAGA,
    payload: {
        offset,
        limit
    }
});