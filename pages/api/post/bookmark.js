import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/posts";
import Users from "../../../models/users";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const posts = await Post.findByIdAndUpdate(req.body.post, {
      $inc: { bookmark: 1 },
    });

    const books = await Users.findByIdAndUpdate(req.body.userId, {
      $push: { bookmarks: req.body.post },
    });
    res.status(200).json({ sign: true });
  } catch (error) {
    res.status(200).json({ sign: false });
  }
}
