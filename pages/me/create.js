import CreateMain from "../../components/create/CreateMain";
import withSession from "../../utils/session";
import SidebarLeft from "../../components/dashboard/sidebarleft";
import Context from "../../context/userInfo";
import { useState, useContext } from "react";
function MyApp({ user }) {
  const userInfo = useContext(Context);
  userInfo.profile = user.profile;
  userInfo.username = user.username;
  userInfo.userId = user.userId;
  return (
    <>
      <div className="grid grid-cols-4 bg-zinc-900 m-3 p-3">
        <SidebarLeft />
        <CreateMain user={user} />
      </div>
    </>
  );
}
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
export default MyApp;
//https://www.npmjs.com/package/react-best-gradient-color-picker
