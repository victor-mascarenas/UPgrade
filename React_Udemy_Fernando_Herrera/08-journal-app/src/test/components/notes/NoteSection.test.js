import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { activeNote } from '../../../actions/notes';
import { NoteSection } from '../../../components/notes/NoteSection';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
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
        notes: [],
        active: {
            id: '1234',
            title: 'Hola',
            body: 'mundo',
            date: 0
        }
    }
};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <NoteSection/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en NoteSection', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de disparar el activeNote', () => {
        const target = {
            name: 'title',
            value: 'Hola de nuevo'
        };
        wrapper.find('input[name="title"]').simulate('change', {
            target
        });
        expect(activeNote).toHaveBeenLastCalledWith('1234', {
            body: initState.notes.active.body,
            title: target.value,
            id: '1234',
            date: 0
        });
    });
});