import React from 'react';
import {shallow, mount} from 'enzyme';
import { TodoApp } from '../../Components/08-useReducer/TodoApp';
import { demoTodos } from '../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en TodoApp', () => {
    const wrapper = shallow(<TodoApp/>);
    Storage.prototype.setItem = jest.fn(() => {});

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test(`Debe de agregar dos todo's`, () => {
        const wrapper = mount(<TodoApp/>);
        act(() => {
            wrapper.find('TodoAdd').prop('addTodo') (demoTodos[0]);
            wrapper.find('TodoAdd').prop('addTodo') (demoTodos[1]);
        });
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (${demoTodos.length})`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
    test('Debe eliinar un todo', () => {
        wrapper.find('TodoAdd').prop('addTodo') (demoTodos[0]);
        wrapper.find('TodoList').prop('buttonOnClick') (demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (0)`);
    });
    
});
