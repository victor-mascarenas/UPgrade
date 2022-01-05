"use strict";
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
var _CustomerD_logger;
Object.defineProperty(exports, "__esModule", { value: true });
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
    constructor(logger) {
        _CustomerD_logger.set(this, void 0);
        __classPrivateFieldSet(this, _CustomerD_logger, logger, "f");
    }
    add(database) {
        try {
            database.add();
        }
        catch (error) {
            __classPrivateFieldGet(this, _CustomerD_logger, "f").log(error.message);
        }
    }
}
_CustomerD_logger = new WeakMap();
