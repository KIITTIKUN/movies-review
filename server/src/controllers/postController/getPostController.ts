import {Request,Response} from 'express'
import reviewDatas from '../../models/reviewDatas'

const getPostController = async (req: Request, res: Response) => {
        const datas = await reviewDatas.find();
        res.json(datas)
}

export default getPostController