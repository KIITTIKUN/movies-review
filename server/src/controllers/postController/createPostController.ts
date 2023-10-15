import {Request,Response} from 'express'
import reviewDatas from '../../models/reviewDatas'
import jwt, { JwtPayload }  from 'jsonwebtoken';
import userDatas from '../../models/userDatas';

const createPostController = async (req: Request,res: Response)=>{
    const decoded = jwt.verify(req.body.token, process.env.TOKEN_KEY as string) as JwtPayload;
    const username = decoded.username
    try {
        const newReviewDatas = new reviewDatas({
            username_review: username,
            title: req.body.title,
            image: req.body.image,
            point: req.body.point,
            review: req.body.review,
        });
        const createReview = await newReviewDatas.save();
        res.json(createReview);
    }
  catch(err){
      return res.json({err})
  }
}

export default createPostController