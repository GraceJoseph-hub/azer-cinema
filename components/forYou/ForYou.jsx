import MovieCard from '../movieSchedule/MovieCard';


const ForYou = () => {
  return (
    <div className="xs:px-[8%] md:px-[10%] lg:px-[2%] py-[4%]">
      <h2 className="text-[2rem] my-[3rem] text-purple">Suggested for You</h2>
      <MovieCard selectedDate={null} limit={6} className=""/>
    </div>
  );
}

export default ForYou