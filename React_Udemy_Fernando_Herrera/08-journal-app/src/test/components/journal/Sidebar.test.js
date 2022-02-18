import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()
}));
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
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
    auth: {},
    ui: {
        loading: false,
        msgError: ''
    },
    notes: {
        notes: []
    }
};
const store = mockStore(initState);

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Sidebar/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en Sidebar', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de llamar al startLogout', () => {
        wrapper.find('button').simulate('click');
        expect(startLogout).toHaveBeenCalledTimes(1);
    });
    test('Debe de llamra el startNewNote', () => {
        wrapper.find('.journal__new-entry').simulate('click');
        expect(startNewNote).toHaveBeenCalledTimes(1);
    });
});