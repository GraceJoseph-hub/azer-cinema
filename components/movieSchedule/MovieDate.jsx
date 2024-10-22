import React, { useState, useEffect } from "react";


const MovieDate = ({ onDateClick, className }) => {
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
    <div className={`flex gap-4 justify-center max-[867px]:flex-wrap ${className}`}>
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
            className={`cursor-pointer flex flex-col items-center p-4 rounded-md border ${className}
              ${
                isSelected ? "bg-purple text-white " : " text-white"
              } transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1`}
          >
            <div className="">
              <div className="text-3xl font-bold">
                {day} {month}
              </div>
              <div>{weekday}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieDate;
