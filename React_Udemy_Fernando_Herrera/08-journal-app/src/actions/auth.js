import { types } from "../reducers/types/types";

export const login = (uid, displayName) => (
    {
        type: types.LOGIN,
        payload: {
            uid,
            displayName
        }
    }
);