class Database {
    add(): void {
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
    log(message: string): void {
        console.log(`An error occurred: ${message}`);
    }
}

//S applied: logger class added to perform log operation
class Customer {
    #logger = new Logger();

    add(database: Database): void {
        try {
            database.add();
        } catch (error: any) {
            this.#logger.log(error.message);
        }
    }
}