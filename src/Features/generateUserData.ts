import { faker } from '@faker-js/faker';
import seedrandom from "seedrandom"
import { applyRandomError } from "./applyRandomError"

export const generateUserData = (numRecords: number, errorRate: number, seed: string, country: string): any[] => {
    const rng = seedrandom(seed);
    faker.seed(Number(seed));
    const userData: any[] = [];

    for (let i = 0; i < numRecords; i++) {
        const name = faker.person.firstName();
        const surname = faker.person.lastName();
        const address = faker.location.streetAddress();
        const phone = faker.phone.number();

        const identifier = `${name}_${surname}`;

        const nameWithError = applyRandomError(name, errorRate, rng);
        const surnameWithError = applyRandomError(surname, errorRate, rng);

        userData.push({ identifier, name: nameWithError, surname: surnameWithError, country: country, address, phone });
    }

    return userData;
};