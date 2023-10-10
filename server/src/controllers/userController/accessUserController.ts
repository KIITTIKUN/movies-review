import { config } from 'dotenv';
config();

import {Request,Response} from 'express'
import userDatas from '../../models/userDatas'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const accessUserController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await userDatas.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password as string))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.TOKEN_KEY as string,
      { expiresIn: '2h' }
    );

    user.token = token;
    return res.status(200).json({success:true,user});
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }
};

export default accessUserController;
