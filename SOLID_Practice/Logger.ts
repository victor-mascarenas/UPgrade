export default class Logger implements ILogger {
    log(message: string): void {
        console.log(`An error occurred: ${message}`);
    }
}

export interface ILogger {
    log(message: string): void;
}