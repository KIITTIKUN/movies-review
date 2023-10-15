import express from 'express'

import bodyParser from 'body-parser';

import createUserController from '../controllers/userController/createUserController';
import accessUserController from '../controllers/userController/accessUserController'

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post("/register", urlencodedParser ,createUserController)
router.post("/login", urlencodedParser ,accessUserController)

export default router;