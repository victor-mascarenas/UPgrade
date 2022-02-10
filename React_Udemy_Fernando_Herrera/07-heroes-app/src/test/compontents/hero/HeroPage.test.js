import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroPage } from '../../../components/hero/HeroPage';

let mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en HeroPage', () => {
    test('No debe de mostrar el HeroPage si no hay un heroe en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroPage/>}/>
                    <Route path='/' element={<h1>No heroe</h1>}/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('h1').text().trim()).toBe('No heroe');
    });
    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain']}>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroPage/>}/>
                    <Route path='/' element={<h1>No heroe</h1>}/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBeTruthy();
    });
    test('Debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain']}>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
    test('Debe d emostrar el No hero Page si no tenemos un heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain65']}>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroPage/>}/>
                    <Route path='/' element={<h1>No heroe</h1>}/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.text().trim()).toBe('No heroe');
    });
});