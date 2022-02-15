import { endLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../reducers/types/types";

describe('Pruebas en UI actions', () => {
    test('Todas las acciones deben de funcionar', () => {
        const error = 'HELP';
        const action = setError(error);
        expect(action).toEqual({
            type: types.UI_SET_ERROR,
            payload: {
                errorMsg: 'HELP'
            }
        });
        const removeErrorAction = removeError();
        expect(removeErrorAction).toEqual({
            type: types.UI_REMOVE_ERROR
        });
        const startLoadingAction = startLoading();
        expect(startLoadingAction).toEqual({
            type: types.UI_START_LOADING
        });
        const endLoadingAction = endLoading();
        expect(endLoadingAction).toEqual({
            type: types.UI_END_LOADING
        });
    });
});