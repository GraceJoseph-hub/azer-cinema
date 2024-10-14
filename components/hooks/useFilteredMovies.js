import { useState, useEffect } from "react";
import moviesData from "../movieSchedule/moviesData";

const useFilteredMovies = (selectedDate) => {
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

  return { dailyMovies, errorMessage };
}

export default useFilteredMovies;
