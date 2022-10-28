import Layout from "../../components/layout/index";
import Main from "../../components/user/mainuser";
import Context from "../../context/userInfo";
import withSession from "../../utils/session";
import dbConnect from "../../utils/dbConnect";
import Users from "../../models/users";
import { useState, useContext } from "react";
import LeftSidebar from "../../components/dashboard/sidebarleft";
const App = ({ userInfo1, user }) => {
  const userInfo = useContext(Context);
  userInfo.profile = userInfo1.profile;
  userInfo.username = userInfo1.username;
  userInfo.userId = userInfo1.userId;
  return (
    <>
      <LeftSidebar />
      <Main user={user} userInfo1={userInfo1} />
    </>
  );
};

export const getServerSideProps = withSession(async function ({
  req,
  res,
  params: { username },
}) {
  const userInfo1 = req.session.get("user");
  const newUsername = username.substring(1);

  if (!userInfo1 || userInfo1 == "undefined") {
    return {
      redirect: {
        source: "/",
        destination: "/",
        permanent: true,
      },
    };
  }
  let users = [];
  await dbConnect();
  try {
    const post = await Users.find({ username: newUsername })
      .select({
        username: 1,
        email: 1,
        bio: 1,
        profile: 1,
        followers: 1,
        followings: 1,
        posts: 1,
      })
      .populate({
        path: "posts",
        select: ["color", "date", "bookmark", "like"],
      })
      .lean();
    users = post;
    if (users == null || users.length == 0) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
  return {
    props: { userInfo1, user: JSON.stringify(users) },
  };
});
App.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default App;
