import { types } from "./types/types";

const initialState = {
    notes: [],
    active: null
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.NOTES_ADD_NEW:
            state = {
                ...state,
                notes: [...state.notes, action.payload]
            };
            break;
        case types.NOTES_ACTIVE:
            state = {
                ...state,
                active: {
                    ...action.payload
                }
            }
            break;
        case types.NOTES_LOAD:
            state = {
                ...state,
                notes: [...action.payload]
            }
            break;
        case types.NOTES_UPDATED:
            state = {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id ?
                        action.payload.note :
                        note
                )
            };
            break;
        case types.NOTES_DELETE:
            state = {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            };
            break;
        case types.NOTES_LOGOUT_CLEANING:
            state = {
                notes: [],
                active: null
            };
            break;
        default:
            break;
    }
    return state;
};