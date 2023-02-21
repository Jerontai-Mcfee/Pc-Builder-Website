// imports from users model
import User from '../models/user.js'

// controller function which returns profile info
export const getUserProfile = async (req, res) => {

  try {
    const user = await User.findById(req.currentUser._id).populate('createdDrinks');

    if (!user) throw new Error();
    console.log('USER: ', user);
    return res.status(200).json(user);

  } catch (err){
    console.error(err);
    return res.status(404).json({ message: 'ERROR. User not found.' });
  }
} 