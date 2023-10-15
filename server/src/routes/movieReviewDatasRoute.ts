import express from 'express'

import bodyParser from 'body-parser';
import auth from "../middleware/auth"

import getPostController from '../controllers/postController/getPostController';
import createPostController from '../controllers/postController/createPostController';
import deletePostController from '../controllers/postController/deletePostController';

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", urlencodedParser, getPostController)

router.post("/", auth ,createPostController)

router.delete("/:movieReviewDatasId", auth, deletePostController)

export default router;