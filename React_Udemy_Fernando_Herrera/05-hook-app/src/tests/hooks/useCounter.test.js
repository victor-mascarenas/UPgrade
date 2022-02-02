import {renderHook, act} from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('Debe de retornar 3 funciones', () => {
        const {result} = renderHook(() => useCounter());
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });
    test('Debe de retornar valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        expect(result.current.state).toBe(10);
    });
    test('Debe de retornar contador indicado', () => {
        const value = 100;
        const {result} = renderHook(() => useCounter(value));
        expect(result.current.state).toBe(value);
    });
    test('Debe de incrementar el contador en 1', () => {
        const value = 20;
        const {result} = renderHook(() => useCounter(value));
        const {increment} = result.current;
        act(() => {
            increment();
        });
        const {state} = result.current;
        expect(state).toBe(value + 1);
    });
    test('Debe de decrementar el contador en 5', () => {
        const value = 200;
        const {result} = renderHook(() => useCounter(value));
        const {decrement} = result.current;
        act(() => {
            decrement(5);
        });
        const {state} = result.current;
        expect(state).toBe(value - 5);
    });
    test('Debe reestablecer el valor', () => {
        const {result} = renderHook(() => useCounter());
        const {increment, reset} = result.current;
        act(() => {
            increment(2);
            reset();
        });
        const {state} = result.current;
        expect(state).toBe(10);
    });
    
});
