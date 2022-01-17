import UserService from './UserService';
import '../css/main.scss';

class Login {
    #form: HTMLElement;
    #userService: UserService;

    constructor(userService: UserService) {
        this.#userService = userService;
        this.init();
    }

    init(): void {
        this.#form = document.querySelector("form") as HTMLElement;
        this.#form.addEventListener('submit', this.formSubmit.bind(this));
    }

    async formSubmit(e: Event): Promise<boolean> {
        e.preventDefault();
        const nameField = this.#form.querySelector('#name') as HTMLInputElement;
        const name = nameField.value;
        const passwordField = this.#form.querySelector('#password') as HTMLInputElement;
        const password = passwordField.value;
        const user = await this.#userService.attemptLogin(name, password);
        if (user.Id !== 0) {
            return true;
        }
    }
}

new Login(new UserService());