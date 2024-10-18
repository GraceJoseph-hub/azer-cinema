import Link from 'next/link';
import moviesData from '../movieSchedule/moviesData';
import Image from 'next/image';

const ForYou = () => {
  const suggestedMovies = moviesData.slice(0, 6);
  return (
    <div className="px-[10%] py-[4%] max-[768px]:px-0">
      <h2>Suggested for You</h2>
      <div className="grid grid-flow-row grid-cols-3 gap-8 max-[768px]:grid-cols-2 ">
        {suggestedMovies.map((movie, index) => (
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
                  <Link
                    href="/BuyTickets"
                    className="text-white border text-center rounded-md py-1 text-sm font-bold w-[100px] animate__animated animate__fadeInRight animate__slower"
                  >
                    {movie.option}
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/BuyTickets"
              className="absolute left-[30%] top-[-10px] text-[0.9rem] bg-black border border-r-purple px-2 rounded-3xl shadow-[2px_2px_2px_#f993f9]"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForYou