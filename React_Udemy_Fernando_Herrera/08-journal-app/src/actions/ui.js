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

export const startLoading = () => {
    return ({
        type: types.UI_START_LOADING
    });
};

export const endLoading = () => {
    return ({
        type: types.UI_END_LOADING
    });
};