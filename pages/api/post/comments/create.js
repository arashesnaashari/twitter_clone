import dbConnect from "../../../../utils/dbConnect";
import Comm from "../../../../models/comments";
import Users from "../../../../models/users";
export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { _id },
  } = req;
  const post = new Comm({
    text: req.body.text,
    post: req.body.post,
    userId: req.body.userId,
    date: Date.now(),
  });
  await post.save();
  res.status(200).json({ sign: true });
}
