import Post from "../../../models/posts";
import User from "../../../models/users";
import dbConnect from "../../../utils/dbConnect";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const post = new Post({
      color: req.body.color,
      info: req.body.info,
      userId: req.body.userId,
      date: Date.now(),
      tags: req.body.tags,
    });

    await post.save();
    const user = await User.findById(req.body.userId);
    user.posts.push(post._id);

    await user.save();
    res.status(200).json({ sign: true });
  } catch (error) {
    res.status(400).json({ sign: false });
  }
}
