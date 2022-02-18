import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';
import {firebase} from '../../firebase/firebase-config';

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}));
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(() => {
        return () => {}
    })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING',
        displayName: null
    },
    ui: {
        loading: false,
        errorMsg: ''
    },
    notes: {
        active: {
            id: 'ABC'
        },
        notes: []
    }
};
let store = mockStore(initState);

describe('Preubas en AppRouter', () => {
    test('Debe llamar al login si estoy autenticado', async () => {
        let user;
        await act(async () => {
            const userCreds = await firebase.auth().signInWithEmailAndPassword('nando@gmail.com', '123456');
            act(() => {
                user = userCreds.user;
                console.log(user);
                const wrapper = mount(
                    <Provider store={store}>
                        <MemoryRouter>
                            <AppRouter/>
                        </MemoryRouter>
                    </Provider>
                );
            });
        });
        expect(login).toHaveBeenCalled();
    });
});