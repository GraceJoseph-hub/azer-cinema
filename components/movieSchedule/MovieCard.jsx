import "animate.css";
import Image from "next/image";
import Link from "next/link";
import useFilteredMovies from "../../components/hooks/useFilteredMovies";

const MovieCard = ({ selectedDate, limit, className }) => {
  const { dailyMovies, errorMessage } = useFilteredMovies(selectedDate);

  const moviesToShow = limit ? dailyMovies.slice(0, limit) : dailyMovies;

  return (
    <div className={`mt-14 xs:grid xs:grid-rows-2 xs:grid-cols-2 xs:gap-8 xs:px-2 md:grid md:grid-flow-row md:grid-cols-2 md:gap-x-8 md:px-0 lg:grid lg:grid-cols-3 lg:gap-x-8 ${className}`}>
      {moviesToShow.length > 0 ? (
        moviesToShow.map((movie, index) => (
          <div key={index} className="relative">
            <div className="relative sm:w-[300px] md:w-[320px] xs:w-[150px] xs:h-[200px] md:h-[350px] border-l rounded-md overflow-hidden max-[768px]:w-[200px]">
              <Image
                src={movie.img}
                alt={movie.title}
                className="rounded-md w-full object-cover bg-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 w-full">
                <h1 className="md:text-[1.5rem] xs:text-[0.8rem] font-bold animate__animated animate__fadeInDown animate__slower">
                  {movie.title}
                </h1>
                <p className="text-purple font-bold text-[0.8rem] animate__animated animate__fadeInUp animate__slower animate__repeat-2">
                  {movie.genre}
                </p>
                <div className="flex items-center justify-between gap-5 w-full">
                  <Link
                    href="/BuyTickets"
                    className="border md:px-2 xs:px-1 xs:text-[0.8rem] xs:text-center rounded-md text-gray-300 shadow-[2px_2px_2px_#f993f9] animate__animated animate__fadeInLeft animate__slower"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/BuyTickets"
                    className="text-white border text-center rounded-md py-1 text-sm font-bold w-[100px] animate__animated animate__fadeInRight animate__slower"
                  >
                    {movie.option}
                  </Link>
                </div>
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
