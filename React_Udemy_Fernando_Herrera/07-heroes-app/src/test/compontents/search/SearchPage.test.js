import { SearchPage } from "../../../components/search/SearchPage";
import { mount } from 'Enzyme';
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en SearchPage', () => {
    test('Debe de mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar mensaje "sin resultados"', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );
        expect(wrapper.find('.card-text').text().trim()).toBe('Ingresa un termino de busqueda');
    });
});