import {Request,Response} from 'express'
import reviewDatas from '../../models/reviewDatas'

const createPostController = async (req: Request,res: Response)=>{
    const newReviewDatas = new reviewDatas({
        username_review: req.body.username_review,
        title: req.body.title,
        image: req.body.image,
        point: req.body.point,
        review: req.body.review,
    });
    const createReview = await newReviewDatas.save();
    res.setHeader('Content-Type', 'application/json')
    res.json(createReview);
}

export default createPostController