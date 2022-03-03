import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { DeleteEventFab } from '../../components/ui/DeleteEventFab';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
const store = mockStore(initState);
const wrapper = mount(
    <Provider store={store}>
        <DeleteEventFab/>
    </Provider>
);

store.dispatch = jest.fn();

describe('Pruebas en DeleteEventFab component', () => {
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});