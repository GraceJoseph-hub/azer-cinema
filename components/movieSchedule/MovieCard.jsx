import "animate.css";
import Image from 'next/image'
import useFilteredMovies from '../../components/hooks/useFilteredMovies'

const MovieCard = ({ selectedDate }) => {
  const { dailyMovies, errorMessage } = useFilteredMovies(selectedDate);
  
  
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
                <p className="text-white text-[1rem] animate__animated animate__fadeInUp animate__slower animate__repeat-2">
                  {movie.text}
                </p>
                <div className="flex items-center justify-between gap-5 w-full">
                  <p className="border px-2 rounded-md text-gray-300 shadow-[2px_2px_2px_#f993f9] animate__animated animate__fadeInLeft animate__slower">
                    {movie.genre}
                  </p>
                  <button className="text-white border text-center rounded-md py-1 text-sm font-bold w-[100px] animate__animated animate__fadeInRight animate__slower">
                     {movie.option}
                  </button>
                </div>
              </div>
            </div>
            <button className="absolute left-[30%] top-[-10px] border border-r-purple px-2 rounded-3xl shadow-[2px_2px_2px_#f993f9]">
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