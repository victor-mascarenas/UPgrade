export default class User {
    #id: number;
    #name: string;
    #email: string;
    #password: string;

    constructor() {
        this.#id = 0;
    }

    init(json: any) {
        this.#id = json.id;
        this.#name = json.name;
        this.#email = json.password;
    }

    get Id() {
        return this.#id;
    }
    get Name() {
        return this.#name;
    }
    get Email() {
        return this.#email;
    }
    get Password() {
        return this.#password;
    }
    set Id(id: number) {
        this.#id = id;
    }
    set Name(name: string) {
        this.#name = name;
    }
    set Email(email: string) {
        this.#email = email;
    }
    set Password(password: string) {
        this.#password = password;
    }
}