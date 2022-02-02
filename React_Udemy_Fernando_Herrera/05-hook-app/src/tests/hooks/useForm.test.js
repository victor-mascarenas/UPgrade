import {renderHook, act} from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Victor',
        email: 'vijagama@outlook.es'
    };
    const e = {
        target: {
            name: 'name',
            value: 'Javier'
        }
    };

    test('Debe de regresar el formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    test('Debe de cambiar el valor del formulatio (name)', () => {
        const {result} = renderHook(() => useForm());
        const [, inputOnChange] = result.current;
        act(() => {
            inputOnChange(e);
        });
        const [values] = result.current;
        expect(values.name).toBe(e.target.value);
    });
    test('Debe de restablecer el formulario con reset', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, inputOnChange, reset] = result.current;
        act(() => {
            inputOnChange(e);
            reset();
        });
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
});
