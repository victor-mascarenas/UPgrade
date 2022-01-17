import '../css/main.scss'
import User from './User';
import UserService from './UserService';

class SignUp {
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
        const user = new User();
        const nameField = this.#form.querySelector('#name') as HTMLInputElement;
        user.Name = nameField.value;
        const emailField = this.#form.querySelector('#email') as HTMLInputElement;
        user.Email = emailField.value;
        const passwordField = this.#form.querySelector('#password') as HTMLInputElement;
        user.Password = passwordField.value;
        const result = await this.#userService.signUp(user);
        if (result) {
            return true;
        }
    }
}

new SignUp(new UserService());