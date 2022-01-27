import useFetchGifs from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {
        const category = 'Hinata';
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Godzilla'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
});
