import React from "@testing-library/react";
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', () => {
    //let wrapper = shallow(<CounterApp/>);
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe ser igual a la snapshot (sin enviar valor)', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el valor por defecto de 0', () => {
        const valor = "0";
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe(valor);
    });
    test('Debe mostrar el valor de 100', () => {
        const valor = "100";
        const wrapper = shallow(<CounterApp value={100}/>);
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe(valor);
    });
    test('Debe incrementar el contador en 1', () => {
        const plusBtn = wrapper.find('#plusBtn');
        plusBtn.simulate('click');
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe('1');
    });
    test('Debe decrementar el contador en 1', () => {
        const minusBtn = wrapper.find('#minusBtn');
        minusBtn.simulate('click');
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe('-1');
    });
    test('Debe regresar el contador a su valor inicial', () => {
        const valor = "100";
        const wrapper = shallow(<CounterApp value={100}/>);
        const plusBtn = wrapper.find('#plusBtn');
        plusBtn.simulate('click');
        const resetBtn = wrapper.find('#resetBtn');
        resetBtn.simulate('click');
        const valorMostrado = wrapper.find('h2').text();
        expect(valorMostrado).toBe(valor);
    });
});
