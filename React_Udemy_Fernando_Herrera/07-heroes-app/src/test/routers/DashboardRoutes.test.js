import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRouter } from '../../routers/DashboardRouter';

describe('Pruebas en DashboardRoutes', () => {
    const name = 'Victor';
    const context = {
        user: {
            logged: false,
            name
        }
    };
    
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <MemoryRouter>
                    <DashboardRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrarse el componente de DC', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.find('h1').text().trim()).toBe('DC Page');
    });
    test('Debe de mostrarse el componente de Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <DashboardRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.find('h1').text().trim()).toBe('MARVEL Page');
    });
});