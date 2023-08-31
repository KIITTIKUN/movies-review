import { config } from 'dotenv';
config();

import express, {Request, Response} from "express";
import mongoose from 'mongoose';

import reviewDatas from './models/reviewDatas'

const PORT = 4000;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`linstening on PORT: ${PORT}`);
    app.listen(PORT);
})


app.post("/movieReviewDatas",async (req: Request,res: Response)=>{
    const newReviewDatas = new reviewDatas({
        title: req.body.title,
        point: req.body.point,
        review: req.body.review,
        image: req.body.image,
    });
    const createReview = await newReviewDatas.save();
    res.json(createReview);
})

app.delete("/movieReviewDatas/:movieReviewDatasId",async (req: Request,res: Response) => {
    const movieReviewsId = req.params.movieReviewDataId;
    const movieReviews = await reviewDatas.findByIdAndDelete(movieReviewsId);
    res.json(movieReviews)
})