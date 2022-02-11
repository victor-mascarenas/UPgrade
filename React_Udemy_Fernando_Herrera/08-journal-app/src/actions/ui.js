import { types } from "../reducers/types/types";

export const setError = (msg) => {
    return ({
        type: types.UI_SET_ERROR,
        payload: {
            errorMsg: msg
        }
    });
};

export const removeError = () => {
    return ({
        type: types.UI_REMOVE_ERROR
    });
};