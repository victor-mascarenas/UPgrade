import { types } from "../reducers/types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { endLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';
import { notesLogout } from "./notes";

export const startLogin = (email, password) => {
    return (dispatch) => {//dispatch comes from Thunk
        dispatch(startLoading());
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            })
            .finally(() => {
                dispatch(endLoading());
            });
    };
};

export const startCredentialsRegistration = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await user.updateProfile({
                    displayName: name
                });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error) => {
                Swal.fire('Error', error.message, 'error');
            });
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

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(notesLogout());
    };
};

export const logout = () => {
    return {
        type: types.LOGOUT
    };
}