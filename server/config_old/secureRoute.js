
// will use JWT's
import jwt from 'jsonwebtoken'

// imports from user model
import { secret } from './environment.js'
import User from '../models/user.js'

export const secureRoute = async (req, res, next) => {

  try {

    if (!req.headers.authorization) throw new Error('Headers are missing');
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log('token', token);
    
    const payload = jwt.verify(token, secret);
    console.log('payload', payload);


    // verifies user via payload (worked on in previous module)
    const unverifiedUser = await User.findById(payload.sub);

    //check if user already exists
    if (!unverifiedUser) throw new Error('User not found');
    
    req.currentUser = unverifiedUser

    next()

  } catch (err) {

    console.error(err);
    return res.status(401).json({ message: "Unauthorized User" });
  }
}