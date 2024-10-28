import Image from "next/image";
import Link from "next/link";
import useFilteredMovies from "../hooks/useFilteredMovies";

const TicketCard = ({ selectedDate}) => {
  const { dailyMovies, errorMessage } = useFilteredMovies(selectedDate);

  return (
    <>
      {dailyMovies.length > 0 ? (
        <div className="xs:grid xs:grid-cols-1 xs:gap-8 md:grid md:grid-cols-2 md:gap-10">
          {dailyMovies.map((movie, index) => (
            <Link
              href={`/movies/${movie.id}`}
              key={index}
              className="xs:flex xs:flex-col md:flex bg-black rounded-md overflow-hidden"
            >
              <Image
                src={movie.img}
                alt={movie.title}
                className="rounded-t-md xs:w-[150px] xs:h-[150px] md:w-[300px] md:h-[300px] object-cover"
              />
              <div className="flex flex-col gap-3 p-4 bg-black bg-opacity-50 w-full">
                <h1 className="xs:text-[1rem] md:text-[1.5rem] font-bold text-white">
                  {movie.title}
                </h1>
                <p className="text-white xs:text-[0.5rem] md:text-[0.8rem]">
                  {movie.text}
                </p>
                <p className="text-white xs:text-[0.5rem] text-[0.8rem]">
                  <span className="text-purple">Genre :</span> {movie.genre}
                </p>
                <p className="text-white xs:text-[0.5rem] text-[0.8rem]">
                  <span className="text-purple">Times : </span>{" "}
                  {movie.time.join(", ")}
                </p>
                <p className="text-white xs:text-[0.5rem] text-[0.8rem]">
                  <span className="text-purple">Movie Screen : </span>
                  {movie.screen}
                </p>
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
