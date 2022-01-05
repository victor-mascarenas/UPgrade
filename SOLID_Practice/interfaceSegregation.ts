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

//I applied: ICustomer interface is segmented into IStore & IGet
interface IStore {
    add(): void;
}

interface IGet {
    read(): CustomerI[];
}

class CustomerI implements IStore {
    add(): void {
        console.log('Added');
    }
}

class CustomerModel implements IGet {
    #customers;

    constructor() {
        this.#customers = [new CustomerI(), new CustomerI()];
    }

    read(): CustomerI[] {
        return this.#customers;
    }
}