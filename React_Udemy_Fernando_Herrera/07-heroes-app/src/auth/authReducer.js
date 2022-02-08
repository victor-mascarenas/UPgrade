/* const state = {
    name: 'Victor',
    logged: true
}; */

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case types.login:
            state = {
                name: action.payload.name,
                logged: true
            };
            break;
        case types.logout:
            state = {
                logged: false
            }
            break;
        default:
            break;
    }
    return state;
};