import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Context from "../../context/userInfo";
import Link from "next/link";

const App = () => {
  const userInfo = useContext(Context);
  const router = useRouter();

  let home = false;
  let setting = false;
  let profile = false;
  let downloads = false;
  let bookmarks = false;
  let create = false;
  switch (router.asPath.split("/")[2]) {
    case "downloads":
      downloads = true;
      break;
    case "setting":
      setting = true;
      break;
    case "profile":
      profile = true;
      break;
    case "create":
      create = true;
      break;
    case "bookmarks":
      bookmarks = true;
      break;
    case "" || null || undefined:
      home = true;
      break;
  }
  return (
    <>
      <div className="flex flex-col text-gray-200 text-3xl py-4 ">
        <div className="mx-auto">
          <h1 className="mb-10">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#9d174d"
              className=" w-36 h-36 "
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </h1>
          <h1
            className={
              home
                ? `mb-10 flex flex-row items-center  p-3 rounded-md bg-zinc-800 text-pink-800`
                : `mb-10 flex flex-row items-center  p-3 rounded-md hover:bg-zinc-800`
            }
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <Link href="/me">Home</Link>
          </h1>
          <h1
            className={
              downloads
                ? `mb-10 flex flex-row items-center  p-3 rounded-md bg-zinc-800 text-pink-800`
                : `mb-10 flex flex-row items-center  p-3 rounded-md hover:bg-zinc-800`
            }
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </span>
            <Link href="/me/downloads">Downloads</Link>
          </h1>
          <h1
            className={
              bookmarks
                ? `mb-10 flex flex-row items-center  p-3 rounded-md bg-zinc-800 text-pink-800`
                : `mb-10 flex flex-row items-center  p-3 rounded-md hover:bg-zinc-800`
            }
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
            <Link href="/me/bookmarks">BookMark</Link>
          </h1>
          <h1
            className={
              setting
                ? `mb-10 flex flex-row items-center  p-3 rounded-md bg-zinc-800 text-pink-800`
                : `mb-10 flex flex-row items-center  p-3 rounded-md hover:bg-zinc-800`
            }
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <Link href="/me/setting">Setting</Link>
          </h1>
          <h1
            className={
              profile
                ? `mb-10 flex flex-row items-center  p-3 rounded-md bg-zinc-800 text-pink-800`
                : `mb-10 flex flex-row items-center  p-3 rounded-md hover:bg-zinc-800`
            }
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <Link href={`/user/@${userInfo.username}`}>Profile</Link>
          </h1>
          <h1
            className={
              create
                ? `mb-10 flex flex-row items-center  p-3 rounded-md bg-zinc-800 text-pink-900`
                : ` bg-pink-800 mb-10 flex flex-row items-center p-3 rounded-md hover:bg-pink-900`
            }
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <Link href="/me/create">Create</Link>
          </h1>
          <button
            className="bg-red-800 mb-10 flex flex-row items-center p-3 rounded-md hover:bg-red-900"
            onClick={() => {
              fetch("http://localhost:3000/api/auth/logout").then(() => {
                router.push("/");
              });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
