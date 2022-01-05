import Database from "./Database";

//Bad example
/* class CustomerL {
    disconut(sales: number): number {
        return sales * 3;
    }
    add(database: Database): void {
        database.add();
    }
} 

class Enquiry extends CustomerL {
    disconut(sales: number): number {
        return sales * 5;
    }
    add(database: Database): void {
        throw 'Not allowed';
    }
}

class BetterGoldCustomer extends DatabaseCustomer {
    disconut(sales: number): number {
        return sales - 100;
    }
}

class BetterSilverCustomer extends DatabaseCustomer {
    disconut(sales: number): number {
        return sales - 50;
    }
}

const database = new Database();
const customers: CustomerL[] = [new BetterGoldCustomer(), new BetterSilverCustomer(), new Enquiry()];
customers.forEach((customer) => {
    customer.add(database);
}); */

//L applied: added IDiscount & IDatabase interfaces. Added DatabaseCustomer class which extends from Customer L & implements IDatabase
interface IDiscount {
    disconut(sales: number): number;
}

interface IDatabase {
    add(database: Database): void;
}

class CustomerL implements IDiscount {
    disconut(sales: number): number {
        return sales * 10;
    }
}

class DatabaseCustomer extends CustomerL implements IDatabase {
    add(database: Database): void {
        database.add();
    }
}

class Enquiry extends CustomerL {
    disconut(sales: number): number {
        return sales * 5;
    }
}

class BetterGoldCustomer extends DatabaseCustomer {
    disconut(sales: number): number {
        return sales - 100;
    }
}

class BetterSilverCustomer extends DatabaseCustomer {
    disconut(sales: number): number {
        return sales - 50;
    }
}

const database = new Database();
const customers: DatabaseCustomer[] = [new BetterGoldCustomer(), new BetterSilverCustomer()];
customers.forEach((customer) => {
    customer.add(database);
});