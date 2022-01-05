"use strict";
//Bad example
/* interface ICustomer {
    add(): void;
    read(): ICustomer[];
}

class CustomerI implements ICustomer {
    add(): void {
        console.log('Added');
    }
    read(): ICustomer[] {
        throw 'Not necessary';
    }
}

class CustomerModel implements ICustomer {
    #customers: ICustomer[];

    constructor() {
        this.#customers = [new CustomerI(), new CustomerI()];
    }

    add(): void {
        throw 'Not necessary';
    }
    read(): ICustomer[] {
        return this.#customers;
    }
} */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CustomerModel_customers;
class CustomerI {
    add() {
        console.log('Added');
    }
}
class CustomerModel {
    constructor() {
        _CustomerModel_customers.set(this, void 0);
        __classPrivateFieldSet(this, _CustomerModel_customers, [new CustomerI(), new CustomerI()], "f");
    }
    read() {
        return __classPrivateFieldGet(this, _CustomerModel_customers, "f");
    }
}
_CustomerModel_customers = new WeakMap();
