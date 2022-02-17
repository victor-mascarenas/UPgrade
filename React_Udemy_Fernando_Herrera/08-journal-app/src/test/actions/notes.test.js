import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../reducers/types/types';

const url = 'https://hola-mundo.com/cosa.jpg';
jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: () => {
        return url;
    }
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        notes: [],
        active: {
            id: '3SUdHZ7bukkIZ4t5y11G',
            title: 'h',
            body: ''
        }
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
    test('Debe de cargar las notas', () => {
        store.dispatch(startLoadingNotes(initState.auth.uid))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: types.NOTES_LOAD,
                    payload: expect.any(Array)
                });
                const expected = {
                    id: expect.any(String),
                    title: expect.any(String),
                    body: expect.any(String),
                    date: expect.any(Number)
                };
                expect(actions[0].payload[0]).toMatchObject(expected);
            });
    });
    test('Debe de actualizar la nota', () => {
        const note = {
            id: 'EUr1Q5IjTv70oiXXBAex',
            title: 'Un titulo',
            body: 'Soy el body'
        };
        store.dispatch(startSaveNote(note))
            .then(async () => {
                const actions = store.getActions();
                expect(actions[0].type).toBe(types.NOTES_UPDATED);
                expect(actions[0].payload.note).toEqual(note);
                const docRef = await db.doc(`${initState.auth.uid}/journal/notes/${note.id}`).get();
                expect(docRef.data().title).toBe(note.title);
            });
    });
    test('Debe de actualizar el url del entry', () => {
        const file = new File([], 'foto.jpg');
        store.dispatch(startUploading(file))
            .then(async () => {
                const docRef = await db.doc(`${initState.auth.uid}/journal/notes/${initState.notes.active.id}`).get();
                expect(docRef.data().url).toBe(url);
            });
    });
});