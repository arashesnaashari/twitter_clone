import dbConnect from "../../../utils/dbConnect";
import Users from "../../../models/users";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const newUser = await Users.findOne({ username: req.body.username });
    if (newUser == null) {
      const newUser1 = await Users.findById(req.body._id);
      newUser1.email = req.body.email;
      newUser1.bio = req.body.bio;
      newUser1.username = req.body.username;
      await newUser1.save();
      res.status(200).json({ sign: "logout" });
    } else if (newUser._id == req.body._id) {
      newUser.email = req.body.email;
      newUser.bio = req.body.bio;
      await newUser.save();
      res.status(200).json({ sign: true });
    } else {
      res.status(200).json({ sign: "username" });
    }
  } catch (error) {
    res.status(200).json({ sign: false });
  }
}
