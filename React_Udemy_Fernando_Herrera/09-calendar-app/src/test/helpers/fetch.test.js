import { fetchWithoutToken } from "../../helpers/fetch";

describe('Pruebas en fetch', () => {
    test('fetchWithoutToken ebe de funcionar', async () => {
        const resp = await fetchWithoutToken('auth', {
            email: 'mario@gmail.com',
            password: '123456'
        }, 'POST');
        expect(resp).toBeInstanceOf(Response);
        const body = await resp.json();
        expect(body.ok).toBeTruthy();
    });
});