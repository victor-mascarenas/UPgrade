import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote } from '../../actions/notes';
import { types } from '../../reducers/types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING'
    }
};
let store;

describe('Pruebas en acciones de notes', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

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
    test('startLoadingNotes debe cargar las notas', async () => {
        await store.dispatch(startLoadingNotes(initState.auth.uid));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.NOTES_LOAD,
            payload: expect.any(Array)
        });
    });
});