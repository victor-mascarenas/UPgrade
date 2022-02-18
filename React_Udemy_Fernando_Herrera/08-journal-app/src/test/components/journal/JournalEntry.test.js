import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
    id: '10',
    title: 'hola',
    body: 'mundo',
    date: 0,
    url: 'https://algunlugar.com/foto.jpg'
}

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <JournalEntry note={note}/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en JournalEntry', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe disparar el activeNote', () => {
        wrapper.find('.journal__entry').simulate('click');
        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(note.id, {...note})
        );
    });
});