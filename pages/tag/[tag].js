import Layout from "../../components/layout/index";
import withSession from "../../utils/session";
import Main from "../../components/tag/index";
import Context from "../../context/userInfo";
import { useState, useContext } from "react";
import dbConnect from "../../utils/dbConnect";
import Post from "../../models/posts";
import LeftSidebar from "../../components/dashboard/sidebarleft";
const App = ({ userInfo1, user1 }) => {
  const userInfo = useContext(Context);
  userInfo.profile = userInfo1.profile;
  userInfo.username = userInfo1.username;
  userInfo.userId = userInfo1.userId;
  return (
    <>
      <LeftSidebar />
      <Main userInfo1={userInfo1} post={user1} />
    </>
  );
};
export const getServerSideProps = withSession(async function ({
  req,
  res,
  params: { tag },
}) {
  const userInfo1 = req.session.get("user");
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
    const post = await Post.find({ tags: tag })
      .select({
        color: 1,
        date: 1,
        bookmark: 1,
        like: 1,
      })
      .populate({
        path: "userId",
        select: ["username", "profile"],
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
    props: { userInfo1, user1: JSON.stringify(users) },
  };
});
export default App;
App.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
