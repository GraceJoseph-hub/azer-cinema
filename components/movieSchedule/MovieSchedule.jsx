import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieDate from "./MovieDate";

const MovieSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="px-[10%] py-20 font-sunflower bg-black bg-opacity-100 max-[768px]:px-0">
      <div className="flex flex-col justify-center items-center gap-6 pb-10">
        <h1 className="text-[2.5rem] text-white max-[768px]:text-[1.5rem]">
          Movies <span className="text-purple">to</span> Watch
        </h1>
        <form action="">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search your favourite movie here..."
            className="w-[400px] py-2 px-4 outline-none rounded-md border text-purple max-[768px]:w-full"
          />
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <MovieDate onDateClick={handleDateClick} className="max-[867px]:flex" />
        <MovieCard selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default MovieSchedule;
