import { config } from 'dotenv';
config();

import {Request,Response} from 'express'
import userDatas from '../../models/userDatas'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const createUserController = async (req: Request,res: Response)=>{
    const { username, password, email, age, gender} = req.body;
    if (!(username && password && email && age && gender)) {
        return res.status(400).setHeader('Content-Type', 'application/json').json({message:'All Input is required.'});
      }
    
    const oldUser = await userDatas.findOne({ username });

    if (oldUser) {
        return res.status(409).setHeader('Content-Type', 'application/json').json({message:'Username already Exist.'});
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const newUserDatas = new userDatas({
        username,
        password: encryptedPassword,
        email: email.toLowerCase(),
        gender,
        age,
        isAdmin: false
    });
    const token = jwt.sign(
        { user_id: newUserDatas._id, username },
        process.env.TOKEN_KEY as string,
        {
            expiresIn: "2h",
        }
        );

    newUserDatas.token = token;

    const createUser = await newUserDatas.save();    

    res.status(200).setHeader('Content-Type', 'application/json').json({ user: createUser, token,message:'Register success' });
    }

export default createUserController