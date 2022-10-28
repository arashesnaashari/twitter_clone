const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  info: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: false,
    },
  ],
  like: {
    type: Number,
    required: false,
    default: 0,
  },
  bookmark: {
    type: Number,
    required: false,
    default: 0,
  },
  downloads: {
    type: Number,
    required: false,
    default: 0,
  },
  date: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
