"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRandomError = void 0;
const faker_1 = require("@faker-js/faker");
const generateRandomErrorType_1 = require("./generateRandomErrorType");
const applyRandomError = (input, errorRate, generateRandom) => {
    if (generateRandom() <= errorRate) {
        const errorType = (0, generateRandomErrorType_1.generateRandomErrorType)(generateRandom);
        if (errorType === 'delete') {
            const randomIndex = Math.floor(generateRandom() * input.length);
            return input.slice(0, randomIndex) + input.slice(randomIndex + 1);
        }
        else if (errorType === 'add') {
            const randomChar = faker_1.faker.string.sample().charAt(0);
            const randomIndex = Math.floor(generateRandom() * (input.length + 1));
            return input.slice(0, randomIndex) + randomChar + input.slice(randomIndex);
        }
        else if (errorType === 'swap') {
            const randomIndex = Math.floor(generateRandom() * (input.length - 1));
            return (input.slice(0, randomIndex) +
                input[randomIndex + 1] +
                input[randomIndex] +
                input.slice(randomIndex + 2));
        }
    }
    return input;
};
exports.applyRandomError = applyRandomError;
