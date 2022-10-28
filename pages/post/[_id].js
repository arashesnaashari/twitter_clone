import Main from "../../components/post/mainpost";
import Layout from "../../components/layout/index";
import LeftSidebar from "../../components/dashboard/sidebarleft";
import Context from "../../context/userInfo";
import withSession from "../../utils/session";
import dbConnect from "../../utils/dbConnect";
import Post from "../../models/posts";

import { useState, useContext } from "react";
const App = ({ user, post, id }) => {
  const userInfo = useContext(Context);
  userInfo.profile = user.profile;
  userInfo.username = user.username;
  userInfo.userId = user.userId;
  return (
    <>
      <LeftSidebar />
      <Main post={post} user={user} id={id} />
    </>
  );
};

export const getServerSideProps = withSession(async function ({
  req,
  res,
  params: { _id },
}) {
  await dbConnect();
  const user = req.session.get("user");
  if (!user || user == "undefined") {
    return {
      redirect: {
        source: "/",
        destination: "/",
        permanent: true,
      },
    };
  }
  let posts = [];
  try {
    const post = await Post.findById(_id)
      .select({
        color: 1,
        userId: 1,
        info: 1,
        tags: 1,
        date: 1,
        like: 1,
        downloads: 1,
        bookmark: 1,
      })
      .populate({
        path: "userId",
        select: ["username", "profile"],
      })
      .lean();
    posts = post;
    if (posts == null || posts.lenght == 0) {
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
    props: { id: _id, user, post: JSON.stringify(posts) },
  };
});

App.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default App;
