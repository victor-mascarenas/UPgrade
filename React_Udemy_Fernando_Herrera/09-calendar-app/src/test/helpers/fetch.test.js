import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

describe('Pruebas en fetch', () => {
    let token;

    test('fetchWithoutToken debe de funcionar', async () => {
        const resp = await fetchWithoutToken('auth', {
            email: 'mario@gmail.com',
            password: '123456'
        }, 'POST');
        expect(resp).toBeInstanceOf(Response);
        const body = await resp.json();
        expect(body.ok).toBeTruthy();
        token = body.token;
    });
    test('fetchWithToken debe de funcionar', async () => {
        localStorage.setItem('token', token);
        const resp = await fetchWithToken('events/6217d8bd334d31dcb56b7517', {}, 'DELETE');
        expect(resp).toBeInstanceOf(Response);
        const body = await resp.json();
        expect(body.msg).toBe('El evento solicitado no existe');
    });
});