import Image from "next/image";
import Link from "next/link";
import useFilteredMovies from "../hooks/useFilteredMovies";

const TicketCard = ({ selectedDate}) => {
  const { dailyMovies, errorMessage } = useFilteredMovies(selectedDate);

  return (
    <>
      {dailyMovies.length > 0 ? (
        <div className="grid grid-cols-2 gap-10">
          {dailyMovies.map((movie, index) => (
            <Link
              href={`/movies/${movie.id}`}
              key={index}
              className="flex bg-black rounded-md overflow-hidden"
            >
              <Image
                src={movie.img}
                alt={movie.title}
                className="rounded-t-md w-[300px] h-[300px] object-cover"
              />
              <div className="p-4 bg-black bg-opacity-50 w-full">
                <h1 className="text-[1.5rem] font-bold text-white">
                  {movie.title}
                </h1>
                <p className="text-white text-[1rem]">{movie.text}</p>
                <p className="text-white text-[1rem]">{movie.genre}</p>
                <p className="text-white text-[1rem]">
                  {movie.time.join(", ")}
                </p>
                <p className="text-white text-[1rem]">{movie.screen}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-white text-lg">{errorMessage || "Loading..."}</p>
      )}
    </>
  );
};

export default TicketCard;
