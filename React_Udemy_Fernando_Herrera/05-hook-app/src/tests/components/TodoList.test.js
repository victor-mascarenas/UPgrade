import React from "react";
import {shallow} from 'enzyme';
import { TodoList } from "../../Components/08-useReducer/TodoList";
import { demoTodos } from "../fixtures/demoTodos";

describe('Pruebas en TodoListItem', () => {
    const pOnClickMock = jest.fn();
    const buttonOnClickMock = jest.fn();
    const wrapper = shallow(<TodoList todos={demoTodos} pOnClick={pOnClickMock} buttonOnClick={buttonOnClickMock}/>);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test(`Debe tener 2 ToDo's`, () => {
        const items = wrapper.find('TodoListItem');
        expect(items.length).toBe(demoTodos.length);
    });
    
});
