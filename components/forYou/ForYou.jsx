import MovieCard from '../movieSchedule/MovieCard';


const ForYou = () => {
  return (
    <div className="px-[10%] py-[4%] max-[768px]:px-0">
      <h2 className="text-[2rem] my-[3rem] text-purple">Suggested for You</h2>
      <MovieCard selectedDate={null} limit={6} />
    </div>
  );
}

export default ForYou