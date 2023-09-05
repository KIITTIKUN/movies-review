import {Request,Response} from 'express'
import reviewDatas from '../models/reviewDatas'

const createPostController = async (req: Request,res: Response)=>{
    const newReviewDatas = new reviewDatas({
        title: req.body.title,
    });
    const createReview = await newReviewDatas.save();
    res.setHeader('Content-Type', 'application/json')
    res.json(createReview);
}

export default createPostController