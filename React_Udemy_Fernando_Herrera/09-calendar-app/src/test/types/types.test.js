import { types } from "../../types/types";

describe('Pruebas en types', () => {
    test('Lo tipos deben ser iguales', () => {
        expect(types).toEqual({
            UI_OPEN_MODAL: '[UI] Open Modal',
            UI_CLOSE_MODAL: '[UI] Close Modal',
            //
            EVENT_START_ADD_NEW: '[EVENT] Start Add New',
            EVENT_ADD_NEW: '[EVENT] Add New',
            EVENT_SET_ACTIVE: '[EVENT] Set Active',
            EVENT_CLEAR_ACTIVE: '[EVENT] Clear Active',
            EVENT_UPDATED: '[EVENT] Event Updated',
            EVENT_DELETED: '[EVENT] Event Deleted',
            EVENT_SLOT_SELECTED: '[EVENT] Slot Selected',
            EVENT_LOADED: '[EVENT] Events Loaded',
            EVENT_CLEANING: '[EVENT] Event Cleaning',
            //
            AUTH_CHECKING: '[AUTH] Checking Login Status',
            AUTH_CHECKING_FINISHED: '[AUTH] Finish Checking Login Status',
            AUTH_START_LOGIN: '[AUTH] Start Login',
            AUTH_LOGIN: '[AUTH] Login',
            AUTH_START_REGISTER: '[AUTH] Start Register',
            AUTH_START_TOKEN_RENEW: '[AUTH] Start Token Renew',
            AUTH_LOGOUT: '[AUTH] Logout'
        });
    });
});