const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentsShema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  text: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  reply: [
    {
      text: {
        type: String,
        required: true,
      },
      profile: { type: String, required: true },
      username: { type: String, required: true },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports =
  mongoose.models.Comment || mongoose.model("Comment", commentsShema);
//post Index
