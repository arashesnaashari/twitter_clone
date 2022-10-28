import Link from "next/link";
const App = ({ username, color, id }) => {
  return (
    <>
      <div className="w-full hover:black_hover_opacity py-4">
        <a href={`/post/${id}`}>
          <div
            className=" mx-auto  border-solid h-32 w-2/3 relative rounded-md"
            style={{
              backgroundImage: color,
            }}
          >
            <footer className=" rounded-b-md shadow-md grid grid-cols-5 bg-black p-1 absolute bottom-0 w-full text-gray-400 h-8">
              <div className="col-span-2">
                <div className="flex flex-row items-center">
                  <Link href={`/user/@${username}`} className="text-md">
                    {`@` + username}
                  </Link>
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
