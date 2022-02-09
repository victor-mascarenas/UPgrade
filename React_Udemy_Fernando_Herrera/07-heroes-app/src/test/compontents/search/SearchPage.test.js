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
    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        const keyword = 'Batman';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${keyword}`]}>
                <SearchPage/>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe(keyword);
        const heroCard = wrapper.find('HeroCard');
        expect(heroCard.length).toBe(1);
        expect(heroCard.find('h5').text().trim()).toBe(keyword);
    });
    test('Debe de mostrar un error si no e encuentra el heroe', () => {
        const keyword = 'batman123';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${keyword}`]}>
                <SearchPage/>
            </MemoryRouter>
        );
        const errorCard = wrapper.find('ErrorCard');
        expect(errorCard.exists()).toBeTruthy();
        expect(errorCard.find('p').text().trim()).toBe(`Sin resultados para ${keyword}`);
    });
});