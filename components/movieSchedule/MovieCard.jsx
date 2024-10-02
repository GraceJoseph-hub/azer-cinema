import "animate.css";
import Image from 'next/image'
import moviesData from './moviesData'
import { useState, useEffect } from "react";

const MovieCard = ({selectedDate}) => {
  const [dailyMovies, setDailyMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const availableMovies = moviesData.filter(
        (movie) => movie.date === formattedDate
      );
      if (availableMovies.length > 0) {
        setDailyMovies(availableMovies);
        setErrorMessage("");
      } else {
        setDailyMovies([]);
        setErrorMessage("No movies available for this date.");
      }
    } else {
      setDailyMovies(moviesData);
    }
  }, [selectedDate]);
  
  return (
    <div className=" flex flex-wrap gap-4">
      {dailyMovies.length > 0 ? (
        dailyMovies.map((movie, index) => (
          <div key={index} className="relative">
            <div className="relative w-[320px] h-[350px] border-l rounded-md overflow-hidden shadow-[2px_2px_2px_#f993f9]">
              <Image
                src={movie.img}
                alt={movie.title}
                className="rounded-md w-full object-cover bg-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 w-full">
                <h1 className="text-[1.5rem] font-bold animate__animated animate__fadeInDown animate__slower animate__infinite">
                  {movie.title}
                </h1>
                <p className="text-white text-[1rem] animate__animated animate__fadeInUp animate__slower animate__infinite">
                  {movie.text}
                </p>
                <div className="flex items-center justify-between gap-5 w-full">
                  <p className="border px-2 rounded-md text-gray-300 shadow-[2px_2px_2px_#f993f9] animate__animated animate__fadeInLeft animate__slower animate__repeat-1">
                    {movie.genre}
                  </p>
                  <p className="text-purple text-sm font-bold w-[100px] animate__animated animate__fadeInRight animate__slower">
                    Times: {movie.times.join(", ")}
                  </p>
                </div>
              </div>
            </div>
            <button className="absolute left-[30%] top-[-10px] z-1 border border-r-purple px-2 rounded-3xl shadow-[2px_2px_2px_#f993f9]">
              View Details
            </button>
          </div>
        ))
      ) : (
        <p className="text-white text-lg">{errorMessage || "Loading..."}</p>
      )}
    </div>
  );
}

export default MovieCard