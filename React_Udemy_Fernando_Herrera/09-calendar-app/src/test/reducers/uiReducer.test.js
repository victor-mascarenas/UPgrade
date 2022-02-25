import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer";

const initialState = {
    modalOpen: false
};

describe('Pruebas en uiReducer', () => {
    test('Debe de retornar el estado por defecto', () => { 
        const state = uiReducer(initialState, {});
        expect(state).toEqual(initialState);
    });
    test('Debe de abrir y cerrar el modal', () => {
        let state = uiReducer(initialState, uiOpenModal());
        expect(state).toEqual({
            modalOpen: true
        });
        state = uiReducer(initialState, uiCloseModal());
        expect(state).toEqual(initialState);
    });
});