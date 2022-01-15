export default class User {
    #id: number;
    #name: string;
    #email: string;

    constructor(json: any) {
        this.#id = json.id;
        this.#name = json.name;
        this.#email = json.password;
    }

    get Id() {
        return this.#id;
    }
}