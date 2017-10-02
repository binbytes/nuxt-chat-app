import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Schema defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

export default mongoose.model('Conversation', ConversationSchema)
