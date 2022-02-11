//State:
/* 
    {
        uid: 'sdgfsfgs43raer',
        name: 'Victor'
    }
*/

import { types } from "./types/types";

export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case types.LOGIN:
            state = {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
            break;
        case types.LOGOUT:
            state = {};
            break;
        default:
            break
    }
    return state;
};