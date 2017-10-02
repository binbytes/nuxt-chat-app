// Importing Node packages required for schema
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const Schema = mongoose.Schema

//================================
// User Schema
//================================
const UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  })

//================================
// User ORM Methods
//================================

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function(next) {
  const user = this, SALT_FACTOR = 5

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

// Method to compare password for login
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err) }

    cb(null, isMatch)
  })
}

UserSchema.methods.toJSON = function() {
  return {
    id: this._id,
    username: this.username,
    name: this.name,
    avatar: 'http://lorempixel.com/55/55/people/' + Math.floor((Math.random() * 10) + 1) //random avatar till we don't have avatar
  }
}

export default mongoose.model('User', UserSchema)
