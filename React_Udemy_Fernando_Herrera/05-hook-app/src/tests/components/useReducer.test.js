import { todoReducer } from "../../Components/08-useReducer/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {
    const newTodo = {
        id: 3,
        desc: 'Aprender Angular',
        done: false
    };

    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });
    test('Debe agregar un ToDo', () => {
        const action = {
            type: 'add',
            payload: newTodo
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state[2]).toEqual(newTodo);
    });
    test('Debe borrar un todo', () => {
        const action = {
            type: 'delete',
            payload: newTodo.id
        };
        const state = todoReducer(demoTodos, action);
        expect(state).toEqual(demoTodos);
    });
    test('Debe borrar un todo (no existe)', () => {
        const action = {
            type: 'delete',
            payload: 100
        };
        const state = todoReducer(demoTodos, action);
        expect(state).toEqual(demoTodos);
    });
    test('Debe de hacer el toggle del todo', () => {
        const action = {
            type: 'toggle',
            payload: demoTodos[1].id
        };
        let state = todoReducer(demoTodos, action);
        expect(state[1].done).toBeTruthy();
        state = todoReducer(state, action);
        expect(state[1].done).toBeFalsy();
    });
});
