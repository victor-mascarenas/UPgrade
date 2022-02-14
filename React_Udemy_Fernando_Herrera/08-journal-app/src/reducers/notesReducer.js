import { types } from "./types/types";

const initialState = {
    notes: [],
    active: null
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.NOTES_ACTIVE:
            state = {
                ...state,
                active: {
                    ...action.payload
                }
            }
            break;
        default:
            break;
    }
    return state;
};