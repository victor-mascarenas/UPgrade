import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en AppRouter', () => {
    let defaultContext;
    let loggedInContext;
    const name = 'Victor';

    beforeEach(() => {
        defaultContext = {
            user: {
                logged: false
            }
        };
        loggedInContext = {
            user: {
                logged: true,
                name
            }
        }
    });

    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={defaultContext}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar Login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={defaultContext}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper.find('h1').text().trim()).toBe('Login Page');
    });
    test('Debe de mostrar el componente de Marvel si esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={loggedInContext}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBeTruthy();
    });
});