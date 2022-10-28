import { useState, useEffect, useContext, useCallback, useRef } from "react";
import TimeAgo from "timeago-react";

const App = ({ id, postId, user }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://localhost:3000/api/post/comments/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const res = await data.json();

      setComment(res);
    }
    fetchData();
  }, [1]);
  const [text, settext] = useState("");
  const [error, setErr] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      text: text,
      userId: user.userId,
      post: postId,
    };
    if (!text || !user.userId) {
      setErr("Complete The text !");
    } else {
      try {
        const res = await fetch(
          "http://localhost:3000/api/post/comments/create",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        const data = await res.json();
        if (data.sign == true) {
          alert("Success");
          setComment([
            {
              text: text,
              userId: {
                username: user.username,
                profile: user.profile,
              },
              date: Date.now(),
            },
            ...comment,
          ]);
        } else {
          alert("ERROR1");
        }
      } catch (error) {
        alert("Error2");
        console.log(error);
      }
    }
  }
  return (
    <>
      <div className="w-full bg-zinc-700 rounded-md p-2 mb-3 ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            onChange={(event) => settext(event.target.value)}
            rows="4"
            cols="50"
            className="bg-zinc-900 mb-3 text-white p-3 rounded-md"
            placeholder="Write Your Comment ..."
          ></textarea>
          <button type="submit" className="rounded-md bg-pink-900 p-3 w-1/4">
            Submit !
          </button>
          {error && <span className="mb-3 text-red-600">{error}</span>}
        </form>
      </div>
      <div className="flex flex-col">
        {comment &&
          comment.map((c) => {
            return (
              <div
                className="bg-zinc-700 m-2 flex flex-col rounded-md"
                key={c._id}
              >
                <div className="flex flex-row justify-between p-2 items-center">
                  <div className="flex flex-row items-center">
                    <div
                      className="w-12 h-12 rounded-3xl bg-slate-50 mr-3"
                      style={{
                        backgroundImage: `url(${c.userId.profile})`,
                        color: "transparent",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      .
                    </div>
                    <h1>{c.userId.username}</h1>
                  </div>
                  <TimeAgo datetime={c.date} locale="fa" />
                </div>
                <div className="p-2">
                  <p>{c.text}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
