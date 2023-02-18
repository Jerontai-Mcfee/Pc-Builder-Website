// REMINDER: ONLY 1 DEFAULT EXPORT

// JWT auth here
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

// shh
import { secret } from '../config/environment.js'


//Register for an accout 
export const registerUser = async (req, res) => {

  try {
    const newUser = await User.create(req.body);
    console.log(newUser);


    // console.log("TESTING 1 TESTING 1");

    return res.status(202).json({ message: `Welcome, ${newUser.username}!` });

  } catch (err) {
    console.error(err);
    return res.status(422).json(err);
  }
}



// console.log("TESTING BEFORE LOGIN ROUTE ESTABLISHED");



// creates login route
export const loginUser = async (req, res) => {

  try {
    const userToLogin = await User.findOne({ email: req.body.email });
    
    console.log(userToLogin.validatePassword(req.body.password));

    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Error();
    }

    // creates JWT token and logs it
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '5 days' });
    console.log(token);

    // console.log("TESTING AFTER JWT TOKEN CREATION");

    return res.status(200).json({ message: `Welcome back, ${userToLogin.username}!`, token });

  } catch (err) {
    console.error(err);
    return res.status(422).json({ message: 'Error. Unauthorized user.' });
  } 
}