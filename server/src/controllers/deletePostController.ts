import {Request,Response} from 'express'
import reviewDatas from '../models/reviewDatas'

const deletePostController = async (req: Request,res: Response) => {
    const movieReviewsId = req.params.movieReviewDatasId;
    const movieReviews = await reviewDatas.findByIdAndDelete(movieReviewsId);
    res.json(movieReviews)
}

export default deletePostController