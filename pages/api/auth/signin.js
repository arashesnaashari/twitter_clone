import User from "../../../models/users";
import dbConnect from "../../../utils/dbConnect";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const existingUser = await User.findOne({
      username: req.body.username,
    });
    if (existingUser) {
      res.status(200).json({ msg: "Username Existed !", sign: false });
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();
    res.status(200).json({ msg: result._id, sign: true });
  } catch (error) {
    res.status(400).json({ msg: "error", sign: false });
    console.log(error);
  }
}
