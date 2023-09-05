import express from 'express'

import bodyParser from 'body-parser';

import getPostController from '../controllers/getPostController';
import createPostController from '../controllers/createPostController';
import deletePostController from '../controllers/deletePostController';

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", urlencodedParser, getPostController)

router.post("/", urlencodedParser ,createPostController)

router.delete("/:movieReviewDatasId",deletePostController)

export default router;