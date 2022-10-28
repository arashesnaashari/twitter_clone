import User from "../../../models/users";
import dbConnect from "../../../utils/dbConnect";
export default async function userHandler(req, res) {
  await dbConnect();

  const {
    query: { username },
    method,
  } = req;

  switch (method) {
    case "GET":
      const user = await User.find({ username: username })
        .select({
          username: 1,
          email: 1,
          bio: 1,
          profile: 1,
          followers: 1,
          followings: 1,
        })
        .lean();
      res.status(200).json(user);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
