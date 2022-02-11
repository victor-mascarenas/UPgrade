import { types } from "../reducers/types/types";

export const startLogin = (email, password) => {
    return (dispatch) => {//dispatch comes from Thunk
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
    };
};

export const login = (uid, displayName) => (
    {
        type: types.LOGIN,
        payload: {
            uid,
            displayName
        }
    }
);