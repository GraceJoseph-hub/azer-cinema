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
    <div className="flex flex-wrap gap-4">
      {dailyMovies.length > 0 ? (
        dailyMovies.map((movie, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] border-2 rounded-md overflow-hidden"
          >
            <Image
              src={movie.img}
              alt={movie.title}
              className="rounded-md w-full object-cover bg-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
              <h1 className="text-[1.5rem] font-bold animate__animated animate__fadeInDown animate__slower animate__infinite">
                {movie.title}
              </h1>
              <p className="text-white text-[1rem] animate__animated animate__fadeInUp animate__slower animate__infinite">
                {movie.text}
              </p>
              <div className="flex py-2">
                <p className="border px-2 rounded-md text-gray-300 animate__animated animate__fadeInLeft animate__slower animate__infinite">
                  {movie.genre}
                </p>
                <p className="text-gray-300 animate__animated animate__fadeInRight animate__slower">
                  Times: {movie.times.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg">{errorMessage || "Loading..."}</p>
      )}
    </div>
  );
}

export default MovieCard