import { types } from "../types/types";

const initialStte = {
    checking: true,/* 
    uid: null,
    name: null */
};

export const authReducer = (state = initialStte, action) => {
    switch(action.type) {
        case types.AUTH_LOGIN:
            state = {
                ...state,
                checking: false,
                ...action.payload
            };
            break;
        case types.AUTH_CHECKING_FINISHED:
            state = {
                ...state,
                checking: false
            };
            break;
        default:
            break;
    }
    return state;
};