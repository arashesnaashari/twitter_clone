import User from "../../../models/users";
import dbConnect from "../../../utils/dbConnect";
import bcrypt from "bcrypt";
import withSession from "../../../utils/session";

export default withSession(async (req, res) => {
  await dbConnect();

  try {
    const Ouser = await User.findOne({ username: req.body.username });
    if (!Ouser) {
      res.status(200).json({ msg: "User Doesn't Exist !", sign: false });
      return;
    }
    const isEqual = await bcrypt.compare(req.body.password, Ouser.password);
    if (!isEqual) {
      res.status(200).json({ msg: "Password is incorrect !", sign: false });
      return;
    }
    req.session.set("user", {
      isLoggedIn: true,
      userId: Ouser._id,
      username: Ouser.username,
      profile: Ouser.profile,
    });
    await req.session.save();

    res.status(200).json({
      userId: Ouser._id,
      username: Ouser.username,
      profile: Ouser.profile,
      sign: true,
    });
  } catch (error) {
    res.status(400).json({ msg: error, sign: false });
  }
});
