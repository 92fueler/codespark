import mongoose from 'mongoose'

const problemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

const Problem = mongoose.model('Problem', problemSchema)

export default Problem
