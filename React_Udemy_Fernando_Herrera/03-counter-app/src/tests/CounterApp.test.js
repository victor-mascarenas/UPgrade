import React from "@testing-library/react";
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', () => {
    test('Debe ser igual a la snapshot (sin enviar valor)', () => {
        const wrapper = shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el valor por defecto de 0', () => {
        const valor = "0";
        const wrapper = shallow(<CounterApp/>);
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe(valor);
    });
    test('Debe mostrar el valor de 100', () => {
        const valor = "100";
        const wrapper = shallow(<CounterApp value={100}/>);
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe(valor);
    });
});
