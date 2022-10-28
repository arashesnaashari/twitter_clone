import Post from "../../../models/posts";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  // const {
  //   query: { slug },
  // } = req;
  const posts = await Post.find({})
    // .skip(+slug[1])
    .limit(5)
    .select({ color: 1, date: 1 })
    .populate({
      path: "userId",
      select: "username",
    })
    .sort({ date: -1 })
    .lean();
  res.status(200).json(posts);
}
