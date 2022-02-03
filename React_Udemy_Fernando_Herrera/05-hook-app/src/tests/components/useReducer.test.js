import { todoReducer } from "../../Components/08-useReducer/todoReducer";
import { demoTodos } from "../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });
    test('Debe agregar un ToDo', () => {
        const todo = {
            id: 3,
            desc: 'Aprender Angular',
            done: false
        };
        const action = {
            type: 'add',
            payload: todo
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state[2]).toEqual(todo);
    });
    
});
