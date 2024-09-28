// import React from 'react'

// const MovieDate = ({onDateClick}) => {
//   const date = new Date();
//   const month = date.toLocaleString("en-US", { month: "long" });
//   const day = date.toLocaleString("en-US", { day: "2-digit" });
//   const year = date.getFullYear();

//   const handleClick = () => {
//     onDateClick(date)
//   }
//   return (
//     <div onClick={handleClick} className="w-[15%]">
//       <div className="flex flex-col justify-center items-center cursor-pointer bg-purple border rounded-xl">
//         <div>{month}</div>
//         <div>{year}</div>
//         <div>{day}</div>
//       </div>
//     </div>
//   );
// }

// export default MovieDate

import React, { useState, useEffect } from "react";


const MovieDate = ({ onDateClick }) => {
  const [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to generate 7 days starting from today
  const generateWeekDates = () => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today); // new Date object and passed today as the starting point.
      date.setDate(today.getDate() + i); // Add i days to today
      dates.push(date);
    }

    setWeekDates(dates);
    setSelectedDate(dates[0]); // Default to today's date
    onDateClick(dates[0]); // Display today's movies initially
  };

  useEffect(() => {
    generateWeekDates();
  }, []);

  const handleClick = (date) => {
    setSelectedDate(date);
    onDateClick(date);
  };

  return (
    <div className="flex gap-4 justify-center">
      {weekDates.map((date, index) => {
        const isSelected =
          selectedDate && selectedDate.toDateString() === date.toDateString();
        const month = date.toLocaleString("en-US", { month: "short" });
        const day = date.toLocaleString("en-US", { day: "2-digit" });
        const weekday = date.toLocaleString("en-US", { weekday: "long" });

        return (
          <div
            key={index}
            onClick={() => handleClick(date)}
            className={`cursor-pointer flex flex-col items-center p-4 rounded-md 
              ${
                isSelected
                  ? "bg-purple text-white transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
                  : "bg-gray-700 text-white"
              } transition-all duration-200`}
          >
            <div className="text-3xl font-bold">
              {day} {month}
            </div>
            <div>{weekday}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieDate;
