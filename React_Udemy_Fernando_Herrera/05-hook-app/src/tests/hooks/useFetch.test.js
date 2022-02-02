import {renderHook, act} from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
    const url = 'https://www.breakingbadapi.com/api/quotes/';

    test('Debe de regresar la informacion por defecto', () => {
        const {result} = renderHook(() => useFetch(`${url}1`));
        const {data, loading, error} = result.current;
        expect(data).toBeNull();
        expect(loading).toBeTruthy();
        expect(error).toBeNull();
    });
    test('Debe de tener la informacion deseada', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`${url}1`));
        await waitForNextUpdate();
        const {data, loading, error} = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBeFalsy();
        expect(error).toBeNull();
    });
    test('Debe de manejar el error', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate();
        const {data, loading, error} = result.current;
        expect(data).toBeNull();
        expect(loading).toBeFalsy();
        expect(error).toBe('No se pudo obtener la informacion');
    });
    
});
