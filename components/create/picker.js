import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import React, { useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";

const App = ({ user }) => {
  const router = useRouter();
  const [color, setColor] = useState(
    "linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)"
  );
  const {
    gradientType,
    setLinear,
    setRadial,
    deletePoint,
    degrees,
    setDegrees,
    selectedPoint,
  } = useColorPicker(color, setColor);
  const style = {
    backgroundImage: color,
    height: "400px",
  };
  const [info, setInfo] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [error, setErr] = useState("");
  console.log(color);
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      color,
      info,
      tags: [tag1, tag2, tag3],
      userId: user.userId,
    };
    if (!info || !color || !user.userId) {
      setErr("Complete The Info !");
    } else {
      try {
        const res = await fetch("https://gradiant.vercel.app/api/post/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (data.sign == true) {
          alert("Success");
          router.push("/me");
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <div className="w-full bg-zinc-800 rounded-md p-2 mb-5">
        <div className="grid grid-cols-4 bg-zinc-800 p-4 w-full gap-3">
          <button
            className="p-3 bg-zinc-700 round-3xl rounded-md hover:bg-zinc-600"
            onClick={setLinear}
          >
            Linear
          </button>
          <button
            className="p-3 bg-zinc-700 round-3xl rounded-md hover:bg-zinc-600"
            onClick={setRadial}
          >
            Radial
          </button>
          {gradientType === "linear-gradient" && (
            <input
              value={degrees}
              type="number"
              onChange={(e) => setDegrees(e.target.value)}
              placeholder="degree .."
              className="bg-zinc-700 p-3"
            />
          )}
          <button
            className="p-3 bg-red-800 round-3xl rounded-md hover:bg-red-900"
            onClick={() => deletePoint(selectedPoint)}
          >
            Delete Color
          </button>
        </div>
        <div style={style}></div>

        <div className="my-3 pl-2">
          <ColorPicker
            value={color}
            onChange={setColor}
            hideControls={true}
            hideInputs={true}
            hidePresets={true}
            width={300}
            height={100}
          />
        </div>
      </div>

      <div className="w-full bg-zinc-800 rounded-md p-2 mb-3 ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            onChange={(event) => setInfo(event.target.value)}
            rows="4"
            cols="50"
            className="bg-zinc-700 mb-3 text-white p-3"
            placeholder="Write Something About Your Design ..."
          ></textarea>
          <input
            onChange={(event) => setTag1(event.target.value)}
            placeholder="tag 1.."
            className="p-3 bg-zinc-700 border-0 w-1/4 mb-3"
          />{" "}
          <input
            onChange={(event) => setTag2(event.target.value)}
            placeholder="tag 2.."
            className="p-3 bg-zinc-700 border-0 w-1/4 mb-3"
          />{" "}
          <input
            onChange={(event) => setTag3(event.target.value)}
            placeholder="tag 3.."
            className="p-3 bg-zinc-700 border-0 w-1/4 mb-3"
          />
          <button type="submit" className="bg-pink-900 p-3">
            Submit !
          </button>
          {error && <span className="mb-3 text-red-600">{error}</span>}
        </form>
      </div>
    </>
  );
};

export default App;
