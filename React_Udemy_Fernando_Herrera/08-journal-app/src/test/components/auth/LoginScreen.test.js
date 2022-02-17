import React from 'react';
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

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
    });
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});