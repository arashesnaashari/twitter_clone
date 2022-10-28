import dbConnect from "../../../../utils/dbConnect";
import Post from "../../../../models/posts";
import Users from "../../../../models/users";
export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { _id },
  } = req;
  const posts = await Post.findByIdAndUpdate(_id, {
    $inc: { like: 1 },
  });

  res.status(200).json({ sign: true });
}
