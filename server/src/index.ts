import express, {Request, Response} from "express";
import mongoose from 'mongoose';

import reviewDatas from './models/reviewDatas'

const PORT = 4000;
const passWord = 'GReRQoKD1jCaLqO4';
const URI = `mongodb+srv://moviesReview:${passWord}@cluster0.ox4yk.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

mongoose.connect(URI).then(()=>{
    console.log(`linstening on PORT: ${PORT}`);
    app.listen(PORT);
})


app.get("/",(req: Request,res: Response)=>{
    res.send("hello world");
});

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
