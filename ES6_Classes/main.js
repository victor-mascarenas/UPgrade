'use strict';

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register() {
        console.log(`${this.username} is now registered`);
    }

    static countUsers() {
        console.log('There are 50 users');
    }
}

let bob = new User('bob', 'bob@mail.com', '12345');
bob.register();
User.countUsers();

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(`${this.username} is subscribed to the ${this.memberPackage}`);
    }
}

let mike = new Member('Mike', 'mike@mail.com', '123456', 'Standard');
mike.register();
mike.getPackage();