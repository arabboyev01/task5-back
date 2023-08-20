"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomErrorType = void 0;
const generateRandomErrorType = (generateRandom) => {
    const errorTypes = ['delete', 'add', 'swap'];
    const randomIndex = Math.floor(generateRandom() * errorTypes.length);
    return errorTypes[randomIndex];
};
exports.generateRandomErrorType = generateRandomErrorType;
