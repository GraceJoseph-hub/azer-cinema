import TrailerPlayer from './TrailerPlayer'
import movieTrailerData from './movieTrailerData';
import logo from '../../public/img/logo.png'
import Image from 'next/image';

const MovieTrailer = () => {

  return (
    <div className="relative">
      {movieTrailerData.map((trailer, index) => (
        <div key={index}>
          <TrailerPlayer videoUrl={trailer.trailerUrl} />
          <div className="absolute top-16 left-16 flex items-center gap-10">
            <Image src={logo} className="w-[40px] h-[40px] rounded-full" />
            <div>
              <h1 className="text-purple text-[1.3rem] font-bold">{trailer.title}</h1>
              <p className="text-white">{trailer.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieTrailer