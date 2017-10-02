import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MessageSchema = new Schema({
  conversationId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
  {
    timestamps: true // createdAt will be our timestamp.
  })

export default mongoose.model('Message', MessageSchema)
