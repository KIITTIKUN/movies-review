import { config } from 'dotenv';
config();

import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
 
import movieReviewDatasRoute from './routes/movieReviewDatasRoute'

const PORT = 3000;

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json());

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`linstening on PORT: ${PORT}`);
    app.listen(PORT);
})

app.use("/movieReviewDatas", movieReviewDatasRoute)