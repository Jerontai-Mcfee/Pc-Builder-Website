import mongoose from 'mongoose'

// uses bcrypt for password hashing
import bcrypt from 'bcrypt'

const userModel = new mongoose.Schema({
  username: { type: String, required: true, maxLength: 25, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true }
})


// userModel will be used throughout file

// shows all relationships to verified user
userModel.virtual('createdComponents', {

    // will reference the model
  ref: 'Component',

  localField: '_id',
  foreignField: 'owner'
})


// allows for pw deletion
userModel.set('toJSON', {
  virtuals: true,


//   uses transform for deletion
  transform(_doc, json) {
    delete json.password
    return json
  }

})


userModel 
  .virtual('pwConfirm')
  .set(function(pwConfirm){
    this._passwordConfirmation = pwConfirm 
  })



// pre-validation
userModel
  .pre('validate', function(next){
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {


      // Invalidate the request
      this.invalidate('pwConfirm', 'Passwords do not match');
    }

    next()
  })



// pre-saving
userModel
  .pre('save', function(next) {

    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }

    next()

  })


// validates if password was inputted correctly (compares to password put into database)
userModel.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}



// exports user model
export default mongoose.model('User', userModel);