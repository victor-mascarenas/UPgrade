import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { eventCleaning } from "./events";

const storeToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('token-start', new Date().getTime());
};

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const res = await fetchWithoutToken('auth', {
            email,
            password
        }, 'POST');
        const body = await res.json();
        if (body.ok) {
            storeToken(body.token);
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    };
};
export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        const res = await fetchWithoutToken('auth/new', {
            name,
            email,
            password
        }, 'POST');
        const body = await res.json();
        if (body.ok) {
            storeToken(body.token);
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    };
};
export const startChecking = () => {
    return async (dispatch) => {
        const res = await fetchWithToken('auth/renew');
        const body = await res.json();
        if (body.ok) {
            storeToken(body.token);
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            dispatch(checkingFinish());
        }
    };
};
export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        dispatch(eventCleaning());
    };
};

const login = (user) => ({
    type: types.AUTH_LOGIN,
    payload: user
});
const checkingFinish = () => ({
    type: types.AUTH_CHECKING_FINISHED
});
const logout = () => ({
    type: types.AUTH_LOGOUT
});