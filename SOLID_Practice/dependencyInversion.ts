import {ILogger} from "./Logger";
import Database from "./Database";

//Bad example
/* class FileLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

class CustomerD {
    #fileLogger: FileLogger;

    constructor() {
        this.#fileLogger = new FileLogger();
    }

    add(database: Database): void {
        try {
            database.add();
        } catch (error: any) {
            this.#fileLogger.log(error.message);
        }
    }
} */

//D applied: instead of a FileLogger property, CustomerD now has a ILogger interface property, which is received by constructor
class CustomerD {
    #logger: ILogger;

    constructor(logger: ILogger) {
        this.#logger = logger;
    }

    add(database: Database): void {
        try {
            database.add();
        } catch (error: any) {
            this.#logger.log(error.message);
        }
    }
}