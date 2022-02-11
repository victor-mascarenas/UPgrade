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
        default:
            break;
    }
    return state;
};