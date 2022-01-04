"use strict";
let userInput;
let userName;
userInput = 'Max';
userInput = 5;
//userName = userInput;//Error (no error with 'any')
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
