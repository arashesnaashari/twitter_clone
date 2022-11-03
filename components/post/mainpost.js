import { useState, useEffect, useContext, useCallback, useRef } from "react";
import TimeAgo from "timeago-react";
import { toPng } from "html-to-image";
import Link from "next/link";
import Comment from "./comment";
const App = ({ post, user, id }) => {
  const poost = JSON.parse(post);
  const [like, setLike] = useState(poost.like);
  const [downloads, setDownload] = useState(poost.downloads);
  const [bookmark, setBookmark] = useState(poost.bookmark);

  const refDivtoPng = useRef(null);

  const handleLike = async (e) => {
    try {
      const res = await fetch(
        `https://gradiant.vercel.app/api/post/like/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      if (data.sign == true) {
        alert("Success");
        setLike((p) => p + 1);
      } else {
        alert("ERROR1");
      }
    } catch (error) {
      alert("Error2");
      console.log(error);
    }
  };
  const handleBookmark = async (e) => {
    const body = {
      userId: user.userId,
      post: id,
    };
    try {
      const res = await fetch("https://gradiant.vercel.app/api/post/bookmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.sign == true) {
        alert("Success");
        setBookmark((p) => p + 1);
      } else {
        alert("ERROR1");
      }
    } catch (error) {
      alert("Error2");
      console.log(error);
    }
  };

  const handleDownload = useCallback(() => {
    if (refDivtoPng.current === null) {
      return;
    }

    toPng(refDivtoPng.current, { cacheBust: true })
      .then(async (dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
        const body = {
          userId: user.userId,
          post: id,
        };
        try {
          const res = await fetch(
            "https://gradiant.vercel.app/api/post/download",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          );
          const data = await res.json();
          if (data.sign == true) {
            alert("Success");
            setDownload((p) => p + 1);
          } else {
            alert("ERROR1");
          }
        } catch (error) {
          alert("Error2");
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refDivtoPng]);

  return (
    <div className="col-span-2 border-x-2 border-zinc-600 scrollll ">
      <div className="flex flex-col items-center ">
        <div
          ref={refDivtoPng}
          style={{ backgroundImage: poost.color }}
          className="w-4/5 h-96 rounded-md"
        ></div>
        <section className="mt-3 grid grid-cols-6 p-3 w-4/5 text-gray-300">
          <div className="col-span-2">
            <div className="flex flex-row items-center">
              <div
                className="w-12 h-12 rounded-3xl bg-slate-50 mr-3"
                style={{
                  backgroundImage: `url(${poost.userId.profile})`,
                  color: "transparent",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                .
              </div>

              <Link
                href={`/user/@${poost.userId.username}`}
                className="text-md"
              >
                {`@` + poost.userId.username}
              </Link>
            </div>
          </div>
          <div className="col-span-4 justify-end ">
            <div className="grid grid-cols-4 justify-items-end">
              <div className="text-md flex flex-col items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                <span className="text-md">
                  <TimeAgo datetime={poost.date} locale="fa" />
                </span>
              </div>
              <div className=" cursor-pointer hover:text-red-600 text-md flex flex-col items-center">
                <span onClick={handleLike}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
                {like}
              </div>
              <div className="cursor-pointer hover:text-amber-700 text-md flex flex-col items-center">
                <span onClick={handleBookmark}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </span>
                {bookmark}
              </div>
              <div className="cursor-pointer hover:text-green-600 text-md flex flex-col items-center">
                <span onClick={handleDownload}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </span>
                {downloads}
              </div>
            </div>
          </div>
        </section>
        <section className="  mt-3 w-3/4 border-l-2 border-l-yellow-500 ">
          <p className="text-white pl-2">{poost.info}</p>
        </section>
        <section className="mt-3 w-3/4 border-l-2 border-l-green-500 ">
          <p className="text-white pl-2">
            <Link href={`/tag/${poost.tags[0]}`}>{poost.tags[0] + " "}</Link>
            <Link href={`/tag/${poost.tags[1]}`}>{poost.tags[1] + " "}</Link>
            <Link href={`/tag/${poost.tags[2]}`}>{poost.tags[2] + " "}</Link>
          </p>
        </section>

        <section className="w-3/4 bg-zinc-800 text-white mt-10 p-2 rounded-md">
          <Comment id={poost._id} user={user} postId={id} />
        </section>
      </div>
    </div>
  );
};

export default App;
// {
//   "_id": "635b7db66d48ea36ba863989",
//   "color": "linear-gradient(32deg,rgba(1,0,0,1) 0%, rgba(31,142,205,1) 47%, RGBA(6, 6, 6, 1) 100%)",
//   "userId": {
//     "_id": "635b6bec6d48ea36ba86397e",
//     "username": "sara",
//     "profile": "/auth.webp"
//   },
//   "info": "Use overscroll-none to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent “bounce” effects when scrolling past the end of the container.\n\n",
//   "tags": ["black", "blue", ""],
//   "date": "1666936288052",
//   "bookmark": 2,
//   "like": 0,
//   "downloads": 0
// }
