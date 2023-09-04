import { config } from 'dotenv';
config();

import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
 
import getPostController from './controllers/getPostController';
import createPostController from './controllers/createPostController';
import deletePostController from './controllers/deletePostController';


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

app.get("/movieReviewDatas", urlencodedParser, getPostController)

app.post("/movieReviewDatas", urlencodedParser ,createPostController)

app.delete("/movieReviewDatas/:movieReviewDatasId",deletePostController)