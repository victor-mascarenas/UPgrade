"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./Database"));
class CustomerL {
    disconut(sales) {
        return sales * 10;
    }
}
class DatabaseCustomer extends CustomerL {
    add(database) {
        database.add();
    }
}
class Enquiry extends CustomerL {
    disconut(sales) {
        return sales * 5;
    }
}
class BetterGoldCustomer extends DatabaseCustomer {
    disconut(sales) {
        return sales - 100;
    }
}
class BetterSilverCustomer extends DatabaseCustomer {
    disconut(sales) {
        return sales - 50;
    }
}
const database = new Database_1.default();
const customers = [new BetterGoldCustomer(), new BetterSilverCustomer()];
customers.forEach((customer) => {
    customer.add(database);
});
