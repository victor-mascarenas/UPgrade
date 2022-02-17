import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { RegiterScreen } from '../../../components/auth/RegiterScreen';
import { types } from '../../../reducers/types/types';

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
    }
};
const store = mockStore(initState);

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegiterScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en RegisterScreen', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe hacer el dispatch de la accion respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });
        wrapper.find('form').simulate('submit', {
            preventDefault: jest.fn()
        });
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.UI_SET_ERROR,
            payload: {
                errorMsg: 'Email is required'
            }
        });
    });
});