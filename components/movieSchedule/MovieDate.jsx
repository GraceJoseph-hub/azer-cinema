import React from 'react'

const MovieDate = () => {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="w-[15%]">
      <div className="flex flex-col justify-center items-center cursor-pointer bg-gray-400 border rounded-xl">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    </div>
  );
}

export default MovieDate