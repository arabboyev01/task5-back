export const generateRandomErrorType = (generateRandom: any): string => {
    const errorTypes = ['delete', 'add', 'swap'];
    const randomIndex = Math.floor(generateRandom() * errorTypes.length);
    return errorTypes[randomIndex];
};