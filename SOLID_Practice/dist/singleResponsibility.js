"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _CustomerS_logger;
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./Logger"));
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
    constructor() {
        _CustomerS_logger.set(this, new Logger_1.default());
    }
    add(database) {
        try {
            database.add();
        }
        catch (error) {
            __classPrivateFieldGet(this, _CustomerS_logger, "f").log(error.message);
        }
    }
}
_CustomerS_logger = new WeakMap();
