import UserLogin from './js/UserLogin';
import './css/main.scss';

class Login {
    #form: HTMLElement;
    #userLogin: UserLogin;

    constructor(userlogin: UserLogin) {
        this.#userLogin = userlogin;
        this.init();
    }

    init(): void {
        this.#form = document.querySelector("form") as HTMLElement;
        this.#form.addEventListener('submit', this.formSubmit.bind(this));
    }

    async formSubmit(e: Event): Promise<boolean> {
        const nameField = this.#form.querySelector('#name') as HTMLInputElement;
        const name = nameField.value;
        const passwordField = this.#form.querySelector('#password') as HTMLInputElement;
        const password = passwordField.value;
        const user = await this.#userLogin.attemptLogin(name, password);
        if (user.Id !== 0) {
            return true;
        }
    }
}

new Login(new UserLogin());