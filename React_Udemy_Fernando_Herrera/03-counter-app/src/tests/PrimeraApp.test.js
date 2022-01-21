import React/* , { render } */ from "@testing-library/react";
import {shallow} from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas ne <PrimeraApp/>', () => {
    /* test('Debe de mostrar el mensaje "Hola soy Victor"', () => {
        const saludo = 'Hola osy Victor';
        //const wrapper = render(<PrimeraApp saludo={saludo}/>);
        //wrapper.getByText();
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    }); */
    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola soy Victor';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Victor';
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });
    
});
