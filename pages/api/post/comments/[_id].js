import dbConnect from "../../../../utils/dbConnect";
import Comm from "../../../../models/comments";
import Users from "../../../../models/users";
export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { _id },
  } = req;
  const posts = await Comm.find({ post: _id })
    .limit(10)
    .select({
      text: 1,
      date: 1,
      reply: 1,
    })
    .populate({
      path: "userId",
      select: ["username", "profile"],
    })
    .sort({ date: -1 })
    .lean();
  res.status(200).json(posts);
}
