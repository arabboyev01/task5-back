import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors"
import { generateData } from "./Routes/GenerateData"

const app = express();
const port = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use('/generate-data', generateData);
