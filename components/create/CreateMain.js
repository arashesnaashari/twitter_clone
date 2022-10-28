import React, { useState, useCallback, useRef } from "react";
import Picker from "./picker";
const App = ({ user }) => {
  return (
    <>
      <div className="col-span-3 border-l-2 border-zinc-600 text-white">
        <div className="flex flex-col items-center scrollll  w-3/4 mx-auto">
          <Picker user={user} />
        </div>
      </div>
    </>
  );
};

export default App;
