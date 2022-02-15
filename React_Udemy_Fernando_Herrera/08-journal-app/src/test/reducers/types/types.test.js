import { types } from "../../../reducers/types/types";

describe('Pruebas en types', () => {
    test('Debe tener el mismo contenido', () => {
        const typesTest = {
            LOGIN: '[Auth] Login',
            LOGOUT: '[Auth] Logout',
            //UI
            UI_SET_ERROR: '[UI] Set Error',
            UI_REMOVE_ERROR: '[UI] Remove Error',
            UI_START_LOADING: '[UI] Start loading',
            UI_END_LOADING: '[UI] End Loading',
            //NOTES
            NOTES_ADD_NEW: '[Notes] New note',
            NOTES_ACTIVE: '[Notes] Set Active Note',
            NOTES_LOAD: '[Notes] Load notes',
            NOTES_UPDATED: '[Notes] Updated Note',
            NOTES_FILE_URL: '[Notes] Updated image url',
            NOTES_DELETE: '[Notes] Delete Note',
            NOTES_LOGOUT_CLEANING: '[Notes] Logout Cleaning'
        };
        expect(types).toEqual(typesTest);
    });
});