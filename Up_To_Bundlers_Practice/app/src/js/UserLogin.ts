import User from "./User";

export default class UserLogin {
    constructor() {

    }

    async attemptLogin(name: string, password: string): Promise<User> {
        let user: User;
        await fetch(`http://localhost:8082/users/${name}/${password}`)
            .then((res) => res.json())
            .then((json) => user = new User(json))
            .catch((error) => console.log(`Error: ${error.message}`));
        return user;
    }
}