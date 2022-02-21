import { types } from "../types/types";

const initialState = {
    modalOpen: false
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.UI_OPEN_MODAL:
            state = {
                ...state,
                modalOpen: true
            };
            break;
        case types.UI_CLOSE_MODAL:
            state = {
                ...state,
                modalOpen: false
            };
            break;
        default:
            break;
    }
    return state;
};