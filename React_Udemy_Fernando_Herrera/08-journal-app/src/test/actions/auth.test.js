import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLogin, startLogout } from '../../actions/auth';
import { types } from '../../reducers/types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING',
        displayName: ''
    },
    ui: {
        loading: false,
        errorMsg: ''
    }
};
let store;

describe('Pruebas con las acciones de auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });
    
    test('Login y logout deben de crear la accion respectiva', async () => {
        const displayName = 'Victor';
        const loginAction = login(initState.auth.uid, displayName);
        expect(loginAction).toEqual({
            type: types.LOGIN,
            payload: {
                uid: initState.auth.uid,
                displayName
            }
        });
        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: types.LOGOUT
        });
    });
    test('Debe iniciar el login', async () => {
        await store.dispatch(startLogin('nando@gmail.com', '123456'));
        const actions = store.getActions();
        console.log(actions);
    });
    test('Debe iniciar el logout', async () => {
        await store.dispatch(startLogout());
        const actions2 = store.getActions();
        expect(actions2[0]).toEqual({
            type: types.LOGOUT
        });
        expect(actions2[1]).toEqual({
            type: types.NOTES_LOGOUT_CLEANING
        });
    });
});