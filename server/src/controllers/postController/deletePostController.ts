import {Request,Response} from 'express'
import reviewDatas from '../../models/reviewDatas'
import jwt, {JwtPayload} from 'jsonwebtoken';

const deletePostController = async (req: Request,res: Response) => {
    try{
        const decoded = jwt.verify(req.body.token, process.env.TOKEN_KEY as string) as JwtPayload;
        const username = decoded.username
        if(req.body.username_review == username){
        const movieReviewsId = req.params.movieReviewDatasId;
        const movieReviews = await reviewDatas.findByIdAndDelete(movieReviewsId);
        res.json(movieReviews)
        } else {
        res.status(404).json({message:'error Username Not match'})
        }
    } catch(err){
        res.status(500).json({ message: 'Internal server error',req  });
    }
}

export default deletePostController