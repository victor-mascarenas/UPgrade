import { authReducer } from "../../reducers/authReducer";
import { types } from "../../reducers/types/types";

describe('Pruebas en authReducer', () => {
    let initialState = {};
    const uid = 'dfgdfg76';
    const name = 'Victor';

    test('Debe de retornar el estado inicial', () => {
        const action = {
            type: 'type'
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual(initialState);
    });
    test('Debe de retornar un estado vacio', () => {
        initialState = {
            uid,
            displayName: name
        };
        const action = {
            type: types.LOGOUT
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual({});
    });
    test('Debe de retornar un estado logeado', () => {
        const action = {
            type: types.LOGIN,
            payload: {
                uid,
                displayName: name
            }
        };
        const expectedState = {
            uid,
            name
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});