import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  console.log(data);
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/AbhayAg10`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git pic" width={200} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/AbhayAg10`);
  return response.json();
};
