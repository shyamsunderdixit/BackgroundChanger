import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center
        gap-3 shodow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button onClick={() => setColor("red")} className="outline-none px-4 bg-red-600 rounded-3xl text-white">Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 bg-green-600 rounded-3xl text-white">Green</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 bg-yellow-600 rounded-3xl text-white">Yellow</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 bg-gray-600 rounded-3xl text-white">Gray</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 bg-purple-600 rounded-3xl text-white">Purple</button>
          <button onClick={() => setColor("slate-600")} className="outline-none px-4 bg-slate-800 rounded-3xl text-white">Lavender</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 bg-blue-600 rounded-3xl text-white">Blue</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 bg-white rounded-3xl border-[1px] border-black">White</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 bg-black rounded-3xl text-white">Black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
