import dbConnect from "../../../utils/dbConnect";
import Users from "../../../models/users";
import Post from "../../../models/posts";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const post = await Post.findByIdAndDelete(req.body.postId);
    const user = await Users.findByIdAndUpdate(req.body.userId, {
      $pull: { posts: req.body.postId },
    });

    res.status(200).json({ sign: true });
  } catch (error) {
    res.status(200).json({ sign: false });
  }
}
