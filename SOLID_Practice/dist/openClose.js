"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./Database"));
class CustomerO {
    add(database) {
        database.add();
    }
}
class ExistingCustomer {
    add(database) {
        database.addExistingCustomer();
    }
}
const database = new Database_1.default();
const customers = [new CustomerO(), new ExistingCustomer()];
customers.forEach((customer) => {
    customer.add(database);
});
