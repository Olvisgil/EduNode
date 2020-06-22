import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    VERIFICATION_SUCCESS,
    REGISTER_FAIL,
    VERIFICATION_FAIL,
    IS_VERIFYING
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
}



export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
        case IS_VERIFYING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED: 
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:        
        case VERIFICATION_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true
            };
        case VERIFICATION_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isVerified: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            return {
                isAuthenticated: false,
                isLoading: false,
                user: null,
                token: null,
                isVerified: false,
            };
        default:
            return state;
    }
}