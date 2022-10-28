const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: false,
    default: "/auth.webp",
  },
  bio: {
    type: String,
    required: false,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],

  downloads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  followings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});
module.exports = mongoose.models.Users || mongoose.model("Users", userSchema);
/** *
arash  63597acc8110ef1431a4e858
reza   635b6a7f6d48ea36ba86397b
sara   635b6bec6d48ea36ba86397e
mary    635b6bec6d48ea36ba86397f
hamid   635b6bec6d48ea36ba863980








 */

//username Index
