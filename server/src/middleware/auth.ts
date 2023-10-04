import {config} from 'dotenv'
config();

import { Request,Response,NextFunction } from 'express';
import jwt from "jsonwebtoken"


declare global {
    namespace Express {
      interface Request {
        user?: any; 
      }
    }
  }
  
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY as string);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken