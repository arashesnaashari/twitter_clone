import Post from "../../../models/posts";
import dbConnect from "../../../utils/dbConnect";
export default async function userHandler(req, res) {
  await dbConnect();

  const {
    query: { _id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const post = await Post.findById(_id)
        .select({
          color: 1,
          userId: 1,
          info: 1,
          tags: 1,
          date: 1,
          likes: 1,
          downloads: 1,
          bookmarks: 1,
        })
        .populate({
          path: "userId",
          select: ["username", "profile"],
        })
        .lean();
      res.status(200).json(post);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
