import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Login } from '../../../components/auth/Login';
import { startLogin } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <Login/>
    </Provider>
);

describe('Pruebas en Login', () => {
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de llamar el dispatch del login', () => {
        const email = 'juan@gmail.com';
        const password = '123456';
        wrapper.find('input[name="loginEmail"]').simulate('change', {
            target: {
                name: 'loginEmail',
                value: email
            }
        });
        wrapper.find('input[name="loginPassword"]').simulate('change', {
            target: {
                name: 'loginPassword',
                value: password
            }
        });
        wrapper.find('form').at(0).prop('onSubmit') ({
            preventDefault: jest.fn()
        });
        expect(startLogin).toHaveBeenCalledWith(email, password);
    });
});