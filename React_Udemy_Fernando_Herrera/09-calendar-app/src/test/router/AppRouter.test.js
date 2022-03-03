import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { AppRouter } from '../../router/AppRouter';
// import { eventStartDelete } from '../../actions/events';

/* jest.mock('../../actions/events', () => ({
    eventStartDelete: jest.fn()
})); */

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// store.dispatch = jest.fn();

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
});