import mongoose from "mongoose";
import User from "../../models/users";
import dbConnect from "../../utils/dbConnect";
export default async function userHandler(req, res) {
  await dbConnect();
  const dataa = req.body.ids.map((i) => {
    return mongoose.Types.ObjectId(i);
  });
  const user = await User.find({
    _id: {
      $in: dataa,
    },
  })
    .select({
      profile: 1,
      username: 1,
      email: 1,
    })
    .lean();
  res.status(200).json(user);
}
