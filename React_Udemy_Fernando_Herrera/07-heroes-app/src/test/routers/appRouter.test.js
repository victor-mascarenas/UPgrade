import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en AppRouter', () => {
    const context = {
        user: {
            logged: false
        }
    };

    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar Login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper.find('h1').text().trim()).toBe('Login Page');
    });
});