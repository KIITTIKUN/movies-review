import express from 'express'

import bodyParser from 'body-parser';

import createUserController from '../controllers/userController/createUserController';

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post("/register", urlencodedParser ,createUserController)
// router.post("/login", urlencodedParser ,createUserController)

export default router;