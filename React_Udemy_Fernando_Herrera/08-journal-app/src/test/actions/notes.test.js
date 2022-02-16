import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { types } from '../../reducers/types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
});

describe('Pruebas en acciones de notes', () => {
    test('Debe crear una nueva nota startNewDate', async () => {
        const payload = {
            id: expect.any(String),
            title: '',
            body: '',
            date: expect.any(Number)
        };
        await store.dispatch(startNewNote());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.NOTES_ADD_NEW,
            payload
        });
        expect(actions[1]).toEqual({
            type: types.NOTES_ACTIVE,
            payload
        });
    });
});