import { useState } from "react";

function App() {
  const [colour, setColour] = useState("darkolivegreen");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
            onClick={() => setColour("red")}>
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
            onClick={() => setColour("green")}>
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
            onClick={() => setColour("blue")}>
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "purple" }}
            onClick={() => setColour("purple")}>
            purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-purple-950"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColour("lavender")}>
            lavender
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "olive" }}
            onClick={() => setColour("olive")}>
            olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "gray" }}
            onClick={() => setColour("gray")}>
            gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColour("yellow")}>
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "pink" }}
            onClick={() => setColour("pink")}>
            pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "black" }}
            onClick={() => setColour("black")}>
            black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "white" }}
            onClick={() => setColour("white")}>
            white
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
