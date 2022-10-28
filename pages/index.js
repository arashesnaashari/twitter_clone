import { useState, useContext } from "react";
import withSession from "../utils/session";
import AuthComponent from "../components/auth/index";
const Com = () => {
  return (
    <div className="bg-gray-800">
      <AuthComponent />
    </div>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (user) {
    return {
      redirect: {
        source: "/",
        destination: "/me",
        permanent: true,
      },
    };
  }

  return {
    props: { user: "" },
  };
});
export default Com;
