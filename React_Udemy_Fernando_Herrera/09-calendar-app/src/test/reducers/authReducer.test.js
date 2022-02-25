import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initialState = {
    checking: true
};

describe('Pruebas en authReducer', () => {
    test('Debe retornar el estdo por defecto', () => {
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });
    test('Debe retornar el estdo posterior inmediato a checkingFinished', () => {
        const state = authReducer(initialState, {
            type: types.AUTH_CHECKING_FINISHED
        });
        expect(state).toEqual({
            checking: false
        });
    });
    test('Debe retornar el estdo posterior inmediato a login', () => {
        const uid = '123';
        const name = 'Victor';
        const state = authReducer(initialState, {
            type: types.AUTH_LOGIN,
            payload: {
                uid,
                name
            }
        });
        expect(state).toEqual({
            checking: false,
            uid,
            name
        });
    });
    test('Debe retornar el estdo posterior inmediato a logout', () => {
        const state = authReducer(initialState, {
            type: types.AUTH_LOGOUT
        });
        expect(state).toEqual({
            checking: false
        });
    });
});