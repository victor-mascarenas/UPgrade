import { types } from "../reducers/types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { endLoading, startLoading } from "./ui";

export const startLogin = (email, password) => {
    return (dispatch) => {//dispatch comes from Thunk
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                dispatch(startLoading());
                await dispatch(login(user.uid, user.displayName));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
                console.log(error);
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
            .catch(error => console.log(error));
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