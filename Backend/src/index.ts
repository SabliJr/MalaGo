const PORT = 5500;

import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`The app is running on port ${PORT}`))