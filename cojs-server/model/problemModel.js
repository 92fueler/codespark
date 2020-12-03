const userSchema = mongoose.Schema(
  {
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
);

const problemModel = mongoose.model("ProblemModel", userSchema);

export default problemModel;
