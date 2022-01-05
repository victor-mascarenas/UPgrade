"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Customer_logger;
class Database {
    add() {
        console.log('Added');
    }
}
//Bad example
/* class Customer {
    add(database: Database): void {
        try {
            database.add();
        } catch (error: any) {
            console.log(`An error occurred: ${error.message}`);
        }
    }
} */
class Logger {
    log(message) {
        console.log(`An error occurred: ${message}`);
    }
}
//S applied: logger class added to perform log operation
class Customer {
    constructor() {
        _Customer_logger.set(this, new Logger());
    }
    add(database) {
        try {
            database.add();
        }
        catch (error) {
            __classPrivateFieldGet(this, _Customer_logger, "f").log(error.message);
        }
    }
}
_Customer_logger = new WeakMap();
