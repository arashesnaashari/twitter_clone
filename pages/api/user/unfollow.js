import dbConnect from "../../../utils/dbConnect";
import Users from "../../../models/users";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const posts = await Users.findByIdAndUpdate(req.body.user, {
      $pull: { followers: req.body.follower },
    });

    const books = await Users.findByIdAndUpdate(req.body.follower, {
      $pull: { followings: req.body.user },
    });
    res.status(200).json({ sign: true });
  } catch (error) {
    res.status(200).json({ sign: false });
  }
}
