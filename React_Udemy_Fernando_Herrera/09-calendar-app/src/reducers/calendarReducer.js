import moment from "moment";
import { types } from "../types/types";

const initialState = {
    events: [
        {
            id: new Date().getTime(),
            title: 'Cumpleaños del jefe',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            notes: 'Comprar el pastel',
            user: {
                _id: '123',
                name: 'Victor'
            }
        }
    ],
    active: null
};

export const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EVENT_SET_ACTIVE:
            state = {
                ...state,
                active: action.payload
            }
        break;
        case types.EVENT_ADD_NEW:
            state = {
                ...state,
                events: [...state.events, action.payload]
            };
            break;
        case types.EVENT_CLEAR_ACTIVE:
            state = {
                ...state,
                active: null
            };
            break;
        case types.EVENT_UPDATED:
            state = {
                ...state,
                events: state.events.map(
                    event => (event.id === action.payload.id) ?
                        action.payload : event
                )
            };
            break;
        default:
            break;
    }
    return state;
};