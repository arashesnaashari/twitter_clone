import { useRouter } from "next/router";
import Context from "../../context/userInfo";
import { useState, useContext } from "react";
import LeftSidebar from "../../components/dashboard/sidebarleft";
import withSession from "../../utils/session";

import Layout from "../../components/layout/index";
import Main from "../../components/dashboard/main";

const Com = ({ user }) => {
  const userInfo = useContext(Context);
  userInfo.profile = user.profile;
  userInfo.username = user.username;
  userInfo.userId = user.userId;

  return (
    <>
      {/* <a href="https://www.youtube.com/">GOOO</a> */}
      <LeftSidebar />
      <Main />
    </>
  );
};
Com.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export const getServerSideProps = withSession(async function ({ req, res }) {
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

  return {
    props: { user },
  };
});
export default Com;
