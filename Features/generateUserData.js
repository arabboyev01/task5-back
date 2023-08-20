"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserData = void 0;
const faker_1 = require("@faker-js/faker");
const seedrandom_1 = __importDefault(require("seedrandom"));
const applyRandomError_1 = require("./applyRandomError");
const generateUserData = (numRecords, errorRate, seed, country) => {
    const rng = (0, seedrandom_1.default)(seed);
    faker_1.faker.seed(Number(seed));
    const userData = [];
    for (let i = 0; i < numRecords; i++) {
        const name = faker_1.faker.person.firstName();
        const surname = faker_1.faker.person.lastName();
        const address = faker_1.faker.location.streetAddress();
        const phone = faker_1.faker.phone.number();
        const identifier = `${name}_${surname}`;
        const nameWithError = (0, applyRandomError_1.applyRandomError)(name, errorRate, rng);
        const surnameWithError = (0, applyRandomError_1.applyRandomError)(surname, errorRate, rng);
        userData.push({ identifier, name: nameWithError, surname: surnameWithError, country: country, address, phone });
    }
    return userData;
};
exports.generateUserData = generateUserData;
