import { config } from 'dotenv';
config();

import {Request,Response} from 'express'
import userDatas from '../../models/userDatas'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const accessUserController = async (req: Request,res: Response)=>{

          const { username, password } = req.body;
      
          if (!(username && password)) {
            res.status(400).send("All input is required");
          }
          const user = await userDatas.findOne({ username });
      
          if (user && (await bcrypt.compare(password, user.password as string))) {
            const token = jwt.sign(
              { user_id: user._id, username },
              process.env.TOKEN_KEY as string,
              {
                expiresIn: "2h",
              }
            );
    user.token = token;

    res.status(200).json(user);
    }
    }

export default accessUserController