import { faker } from '@faker-js/faker';
import { generateRandomErrorType } from "./generateRandomErrorType"

export const applyRandomError = (input: string, errorRate: number, generateRandom: any): string => {
    if (generateRandom() <= errorRate) {
        const errorType = generateRandomErrorType(generateRandom);
        if (errorType === 'delete') {
            const randomIndex = Math.floor(generateRandom() * input.length);
            return input.slice(0, randomIndex) + input.slice(randomIndex + 1);
        } else if (errorType === 'add') {
            const randomChar = faker.string.sample().charAt(0);
            const randomIndex = Math.floor(generateRandom() * (input.length + 1));
            return input.slice(0, randomIndex) + randomChar + input.slice(randomIndex);
        } else if (errorType === 'swap') {
            const randomIndex = Math.floor(generateRandom() * (input.length - 1));
            return (
                input.slice(0, randomIndex) +
                input[randomIndex + 1] +
                input[randomIndex] +
                input.slice(randomIndex + 2)
            );
        }
    }
    return input;
};