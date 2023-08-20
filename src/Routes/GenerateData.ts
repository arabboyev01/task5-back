import express, { Request, Response } from 'express';
import { generateUserData } from '../Features/generateUserData'

const generateData = express.Router();

generateData.post('/', async (req: Request, res: Response) => {
    const {region, errorRate, seed} = req.body;
    const numRecords = 50
    try {

        const generatedData = generateUserData(numRecords, errorRate, seed, region);
        res.status(200).json({data: generatedData});

    } catch (error) {
        res.status(500).json({error: 'An error occurred during data generation.'});
    }
});

export { generateData };