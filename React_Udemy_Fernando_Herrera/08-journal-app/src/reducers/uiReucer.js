import { types } from "./types/types";

const initialState = {
    loading: false,
    msgError: null
};

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.UI_SET_ERROR:
            state = {
                ...state,
                msgError: action.payload.errorMsg
            };
            break;
        case types.UI_REMOVE_ERROR:
            state = {
                ...state,
                msgError: null
            };
            break;
        case types.UI_START_LOADING:
            state = {
                ...state,
                loading: true
            };
            break;
        case types.UI_END_LOADING:
            state = {
                ...state,
                loading: false
            };
            break;
        default:
            break;
    }
    return state;
};