import Database from './Database';
import Logger from './Logger';

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

//S applied: logger class added to perform log operation
class CustomerS {
    #logger = new Logger();

    add(database: Database): void {
        try {
            database.add();
        } catch (error: any) {
            this.#logger.log(error.message);
        }
    }
}