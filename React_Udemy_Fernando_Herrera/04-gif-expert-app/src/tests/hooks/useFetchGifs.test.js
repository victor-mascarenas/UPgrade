import useFetchGifs from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {
    test('Debe de retornar el estado inicial', () => {
        const category = 'Hinata';
        const {result} = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
});
