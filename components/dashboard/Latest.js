import LatestCard from "./latestcard";
import { useState, useEffect, useContext } from "react";

const App = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://gradiant.vercel.app/api/post/latest", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await data.json();

      setPosts(res);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-zinc-800 rounded-xl w-3/4 scrollll ">
        {posts &&
          posts.map((p) => {
            return (
              <LatestCard
                color={p.color}
                username={p.userId.username}
                id={p._id}
                key={p._id}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;
