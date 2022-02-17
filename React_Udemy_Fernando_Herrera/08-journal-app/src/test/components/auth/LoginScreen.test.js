import React from 'react';
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLogin } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLogin: jest.fn()
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
    }
};
let store;

const wrapper = mount(
    <Provider store={mockStore(initState)}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en LoginScreen', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de disparar la accion de startGoogleLogin', () => {
        wrapper.find('.google-btn').simulate('click');
        expect(startGoogleLogin).toHaveBeenCalledTimes(1);
    });
    test('Debe de disparar el startLogin con los respectivos argumentos', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: jest.fn()
        });
        expect(startLogin).toHaveBeenCalledWith('nando@gmail.com', '123456');
    });
});