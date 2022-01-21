import React, { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas ne <PrimeraApp/>', () => {
    test('Debe de mostrar el mensaje "Hola soy Victor"', () => {
        const saludo = 'Hola osy Victor';
        /* const wrapper = render(<PrimeraApp saludo={saludo}/>);
        wrapper.getByText(); */
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    });
    
});
