import { types } from "../reducers/types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLogin = (email, password) => {
    return (dispatch) => {//dispatch comes from Thunk
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error) => console.log(`Ocurrio un error al conectar con Google: ${error}`));
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