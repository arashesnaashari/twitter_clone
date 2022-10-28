import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/posts";
import Users from "../../../models/users";
export default async function handler(req, res) {
  await dbConnect();
  //   const {
  //     query: { slug },
  //   } = req;
  const posts = await Post.find({})
    // .skip(+slug[0])
    // .limit(+slug[1])
    .select({
      color: 1,
      like: 1,
      bookmark: 1,
      date: 1,
    })
    .populate({
      path: "userId",
      select: ["username", "profile"],
    })
    .sort({ like: -1 })
    .lean();
  res.status(200).json(posts);
}
//username
//profile
