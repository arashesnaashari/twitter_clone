import TimeAgo from "timeago-react";

import Link from "next/link";

const App = ({ profile, username, color, like, bookmark, date, id }) => {
  // timeago.register("fa", fa);
  return (
    <>
      <div className="w-full hover:bg-zinc-700 py-4">
        <a href={`/post/${id}`}>
          <div
            className=" mx-auto rounded-md border-zinc-600 border-2 border-solid h-72 w-2/3 relative"
            style={{
              backgroundImage: color,
            }}
          >
            <footer className=" rounded-b-md grid grid-cols-5 bg-black p-3 absolute bottom-0 w-full text-gray-300">
              <div className="col-span-2">
                <div className="flex flex-row items-center">
                  <div
                    className="w-12 h-12 rounded-3xl bg-slate-50 mr-3"
                    style={{
                      backgroundImage: `url(${profile})`,
                      color: "transparent",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    .
                  </div>
                  <Link href={`/user/@${username}`} className="text-md">
                    {`@` + username}
                  </Link>
                </div>
              </div>
              <div className="col-span-3 justify-end ">
                <div className="grid grid-cols-3 justify-items-end">
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
                    <span className="text-sm">
                      <TimeAgo datetime={date} locale="fa" />
                    </span>
                  </div>
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </span>
                    {like}
                  </div>
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
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </span>
                    {bookmark}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </a>
      </div>
    </>
  );
};

export default App;
