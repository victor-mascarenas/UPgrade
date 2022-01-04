let userInput: unknown;
let userName: string;

userInput = 'Max';
userInput = 5;
//userName = userInput;//Error (no error with 'any')

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured', 500);