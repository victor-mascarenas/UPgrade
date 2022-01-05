import Database from './Database';

//Bad example
/* class CustomerO {
    #type: number;

    constructor() {
        this.#type = 1;
    }

    add(database: Database): void {
        if (this.#type === 0) {
            database.add();
        } else {
            database.addExistingCustomer();
        }
    }
} */

//O applied: 2 customer types added, implementing ICustomer interface
interface ICustomer {
    add(database: Database): void;
}

class CustomerO implements ICustomer {
    add(database: Database): void {
        database.add();
    }
}

class ExistingCustomer implements ICustomer {
    add(database: Database): void {
        database.addExistingCustomer();
    }
}

const database = new Database();
const customers: ICustomer[] = [new CustomerO(), new ExistingCustomer()];
customers.forEach((customer: ICustomer) => {
    customer.add(database);
});