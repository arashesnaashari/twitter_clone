import "../styles/globals.css";
import withSession from "../utils/session";
import { useContext, useState } from "react";
import Context from "../context/userInfo";
function MyApp({ Component, pageProps }) {
  const [userId, setU] = useState();
  const [username, setU1] = useState();
  const [profile, setU2] = useState();

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Context.Provider
      value={{
        userId,
        username,
        profile,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
