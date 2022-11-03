import { useState, useContext } from "react";
import { useRouter } from "next/router";
import useUser from "../../utils/useUser";
import withSession from "../../utils/session";
import Context from "../../context/userInfo";

const Com = () => {
  const userInfo = useContext(Context);
  const router = useRouter();
  const { user, mutateUser } = useUser();
  const [menu, Open] = useState(false);
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const [password, setPass] = useState("");
  const [err, setErr] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    setErr(null);
    if (isLogin == false) {
      //signUp
      const body = {
        username: username,
        password: password,
        email: email,
      };
      if (!username || !email || !password) {
        setErr("Complete The Form");
      } else {
        try {
          setLoading(true);
          const res = await fetch(
            "https://gradiant.vercel.app/api/auth/signin",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          );
          const data = await res.json();
          if (data.sign == true) {
            setLoading(false);

            setisLogin(!isLogin);
          } else {
            setLoading(false);

            setErr(data.msg);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    if (isLogin == true) {
      try {
        setLoading(true);
        const res = await fetch("https://gradiant.vercel.app/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, username }),
        });
        const data = await res.json();
        if (data.sign == true) {
          setLoading(false);
          userInfo.profile = data.profile;
          userInfo.username = data.username;
          userInfo.userId = data.userId;
          router.push("/me");
        } else {
          setLoading(false);
          setErr(data.msg);
        }
      } catch (error) {
        console.log("error " + error);
      }
    }
  }
  return (
    <>
      <div
        className="rounded-2xl"
        style={{
          margin: "0 auto",
          width: "80vw",
          height: "90vh",
          backgroundColor: "#374151",
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="justify-center md:justify-between bg-fuchsia-200 rounded-2xl h-4/5 w-4/5">
          <div className="flex justify-center my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="purple"
              class=" w-32 h-32"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col p-3 w-full content-center items-center">
              <form onSubmit={handleSubmit} className="flex flex-col p-2 ">
                <h1 className=" text-5xl font-bold">
                  Lets Create and Share Gradiants ! ){" "}
                </h1>
                {!isLogin ? (
                  <>
                    <span className="text-md my-3 text-gray-400">
                      Do You Have an Account ?{" "}
                      <a
                        className="font-bold underline text-black"
                        onClick={() => setisLogin(!isLogin)}
                      >
                        Login
                      </a>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-md my-3 text-gray-400">
                      You Dont Have any Account ?{" "}
                      <a
                        className="font-bold underline text-black"
                        onClick={() => setisLogin(!isLogin)}
                      >
                        signUp
                      </a>
                    </span>
                  </>
                )}
                <label className="text-md text-fuchsia-800">Username</label>
                <input
                  onChange={(event) => setUser(event.target.value)}
                  type="text"
                  className="w-4/5 p-2 rounded-md border-b-2 border-fuchsia-800 mb-2 focus:outline-0 focus:border-2"
                />
                {!isLogin && (
                  <>
                    <label className="text-md text-gray-500">Email</label>
                    <input
                      onChange={(event) => setEmail(event.target.value)}
                      type="text"
                      className="w-4/5 p-2 rounded-md border-b-2 border-fuchsia-800 mb-2 focus:outline-0 focus:border-2"
                    />
                  </>
                )}
                <label className="text-md text-gray-500">Password</label>
                <input
                  onChange={(event) => setPass(event.target.value)}
                  type="password"
                  className="w-4/5 p-2 rounded-md border-b-2 border-fuchsia-800 mb-2 focus:outline-0 focus:border-2"
                />
                {!loading && (
                  <button
                    type="submit"
                    className="  bg-gray-700 p-2 w-4/5 mt-2 rounded-xl text-white"
                  >
                    Submit
                  </button>
                )}
                {loading && (
                  <button
                    type="submit"
                    className="  bg-fuchsia-800 p-2 w-4/5 mt-2 rounded-xl text-white"
                  >
                    Submit
                  </button>
                )}

                {err && (
                  <span className="text-md mt-2 text-gray-400">{err}</span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Com;
