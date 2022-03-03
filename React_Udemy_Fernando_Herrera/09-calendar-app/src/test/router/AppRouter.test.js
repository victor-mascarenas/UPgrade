import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { AppRouter } from '../../router/AppRouter';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pruebas en AppRouter', () => {
    test('Debe de mostrar el "espere"', () => {
        const initState = {
            auth: {
                checking: true
            }
        };
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe demostrar la ruta publica', () => {
        const initState = {
            auth: {
                checking: false,
                uid: null
            }
        };
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.login-container').exists()).toBeTruthy();
    });
    test('Debe demostrar la ruta privada', () => {
        const initState = {
            auth: {
                checking: false,
                uid: '123',
                name: 'Victor'
            },
            ui: {
                modalOpen: false
            },
            calendar: {
                events: []
            }
        };
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.calendar-screen').exists()).toBeTruthy();
    });
});