import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import Swal from 'sweetalert2';
import * as fetchModule from '../../helpers/fetch';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

describe('Pruebas en las acciones de Auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });
    
    test('StartLogin correcto', async () => {
        await store.dispatch(startLogin('mario@gmail.com', '123456'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.AUTH_LOGIN,
            payload: {
                uid: expect.any(String),
                name: 'Mario'
            }
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-start', expect.any(Number));
    });
    test('StartLogin incorrecto', async () => {
        await store.dispatch(startLogin('mario@gmail.com', '123dfg456'));
        const actions = store.getActions();
        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledTimes(1);
    });
    test('StartRegister correcto', async () => {
        const uid = '123';
        const name = 'Carlos';
        const token = 'ABC123ABC123';
        fetchModule.fetchWithoutToken = jest.fn(() => ({
            json: () => {
                return {
                    ok: true,
                    uid,
                    name,
                    token
                };
            }
        }));
        await store.dispatch(startRegister('test@test.com', '123456', 'Test'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.AUTH_LOGIN,
            payload: {
                uid,
                name
            }
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('token', token);
        expect(localStorage.setItem).toHaveBeenCalledWith('token-start', expect.any(Number));
    });
});