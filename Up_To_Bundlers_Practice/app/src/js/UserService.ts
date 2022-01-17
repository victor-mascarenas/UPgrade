import User from "./User";

export default class UserLogin {
    constructor() {

    }

    async attemptLogin(name: string, password: string): Promise<User> {
        let user = new User();
        await fetch(`http://localhost:8082/users/${name}/${password}`)
            .then((res) => res.json())
            .then((json) => user.init(json))
            .catch((error) => console.log(`Error: ${error.message}`));
        return user;
    }
    async signUp(user: User): Promise<boolean> {
        let done = false;
        await fetch('http://localhost:8082/users/user', {
            method:'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({id: 0,name: user.Name, email: user.Email, password: user.Password})
        })
            .then(() => done = true)
            .catch((error) => console.log(`Error: ${error.message}`));
        return done;
    }
}