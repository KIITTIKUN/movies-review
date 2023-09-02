import { config } from 'dotenv';
config();

import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import reviewDatas from './models/reviewDatas'

const PORT = 3000;

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors({
    origin: "*"
}));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json());

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`linstening on PORT: ${PORT}`);
    app.listen(PORT);
})

app.get("/movieReviewDatas", urlencodedParser, async (req: Request, res: Response)=>{
    const datas = await reviewDatas.find();
    res.json(datas)
})

app.post("/movieReviewDatas", urlencodedParser ,async (req: Request,res: Response)=>{
    const newReviewDatas = new reviewDatas({
        title: req.body.title,
    });
    const createReview = await newReviewDatas.save();
    res.setHeader('Content-Type', 'application/json')
    res.json(createReview);
})

app.delete("/movieReviewDatas/:movieReviewDatasId",async (req: Request,res: Response) => {
    const movieReviewsId = req.params.movieReviewDataId;
    const movieReviews = await reviewDatas.findByIdAndDelete(movieReviewsId);
    res.json(movieReviews)
})