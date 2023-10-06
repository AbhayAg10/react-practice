import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : 'Abhay',
    age : '26'
  }
  let newArray = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-5 ">
        Tailwind Test
      </h1>
      <Card topic = 'react_tailwind' someObj = {myObj} someArr = {newArray} />
      <Card topic = 'Abhay' someObj = {myObj} someArr = {newArray} />
    </>
  );
}

export default App;
