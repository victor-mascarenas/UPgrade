import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Pruebas en authReducer', () => {
    const initialState = {
        logged: false
    };
    const name = 'Victor';

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });
    test('Debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: name
            }
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual({
            logged: true,
            name: name
        });
    });
    test('Debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        };
        const state = authReducer({
            logged: true,
            name: name
        }, action);
        expect(state).toEqual(initialState);
    });
});