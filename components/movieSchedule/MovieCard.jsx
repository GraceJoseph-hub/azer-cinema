import "animate.css";
import Image from "next/image";
import Link from "next/link";
import useFilteredMovies from "../../components/hooks/useFilteredMovies";

const MovieCard = ({ selectedDate, limit, className }) => {
  const { dailyMovies, errorMessage } = useFilteredMovies(selectedDate);

  const moviesToShow = limit ? dailyMovies.slice(0, limit) : dailyMovies;

  return (
    <div
      className={`mt-14 mb-14 grid grid-cols-2 md:grid-cols-3 gap-4 lg:px-[45px] ${className}`}
    >
      {moviesToShow.length > 0 ? (
        moviesToShow.map((movie, index) => (
          <div key={index} className="relative w-full">
            <div className="relative border-l rounded-md overflow-hidden ">
              <Image
                src={movie.img}
                alt={movie.title}
                className="rounded-md w-full object-cover bg-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 w-full">
                <h1 className="md:text-[1.5rem]  xs:text-[0.8rem] font-bold animate__animated animate__fadeInDown animate__slower">
                  {movie.title}
                </h1>
                <p className="text-purple mb-2 font-bold text-[0.8rem] animate__animated animate__fadeInUp animate__slower animate__repeat-2">
                  {movie.genre}
                </p>
                {/* <div className="flex items-center justify-between gap-5 w-full"> */}
                  <Link
                    href={`/movies/${movie.id}`}
                    className="border py-1 md:px-2 xs:px-1 text-[0.8rem] md:text-[1rem] xs:text-center rounded-md text-gray-300 shadow-[2px_2px_2px_#f993f9] animate__animated animate__fadeInLeft animate__slower"
                  >
                    View Details
                  </Link>
                  {/* <Link
                    href={`/movies/${movie.id}`}
                    className="text-white border text-center rounded-md py-1 text-[0.8rem] md:text-[1rem] font-bold w-[100px] animate__animated animate__fadeInRight animate__slower"
                  >
                    {movie.option}
                  </Link> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg">{errorMessage || "Loading..."}</p>
      )}
    </div>
  );
};

export default MovieCard;
