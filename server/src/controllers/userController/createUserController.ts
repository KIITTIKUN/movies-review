import {Request,Response} from 'express'
import userDatas from '../../models/userDatas'

const createUserController = async (req: Request,res: Response)=>{
    const newReviewDatas = new userDatas({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        isAdmin: false
    });
    const createReview = await newReviewDatas.save();
    res.setHeader('Content-Type', 'application/json')
    res.json(createReview);
}

export default createUserController