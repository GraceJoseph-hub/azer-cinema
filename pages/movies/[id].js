import { useRouter } from "next/router";
import { useState } from "react";
import moviesData from '../../components/movieSchedule/moviesData';
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import TicketForm from "@/pages/TicketForm";


const TicketDetails = () => {
  const [screenState, setScreenState] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const handleBack = () => {
    router.back();
  };
  const increment = () => {
    setError("")
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setError("")
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  const handleProceed = () => {
    if (quantity > 0) {
      setScreenState(screenState + 1);
       setError("");
    } else {
      setError("Please select the number of tickets.");
    }
  };


  if (!id) return <p>Loading...</p>;

  const movie = moviesData.find((mv) => mv?.id === parseInt(id));
  console.log(movie);

  if (!movie) return <p>Movie not found</p>;

  return (
    <Layout>
      <div className="h-[50vh] w-full bg-[url('/img/ticket2.jpg')] bg-no-repeat bg-cover bg-top">
        <p className="absolute top-[30%] left-[10%] w-[50%] md:w-[30%] capitalize text-white text-[0.8rem] md:text-[1.2rem]">
          book your ticket now and dive into the cinematic experience!
        </p>
      </div>
      {screenState === 0 && (
        <div className="px-[5%] my-[50px]">
          <button
            onClick={handleBack}
            className="border border-purple px-4 mb-6 text-[1rem] rounded-md"
          >
            &#8592;
          </button>
          <div className="flex flex-col md:flex-row md:items-center gap-8 bg-gray-900 rounded-lg">
            <div className="pl-3 pt-3 md:pb-3">
              <Image src={movie.img} alt={movie.title} className="rounded-lg" />
            </div>
            <div className="px-3 pb-3">
              <h2 className="text-[1rem] md:text-[2rem]">
                Movie Title : {movie.title}
              </h2>
              <p className="text-[0.8rem] md:text-[1rem]">
                Genre: {movie.genre}
              </p>
              <p className="text-[0.8rem] md:text-[1rem]">
                Duration: {movie.duration}
              </p>
            </div>
          </div>
          <div className="my-[50px]">
            <p className="my-6 text-[2rem] text-purple">Number of Tickets</p>
            <div className="flex gap-6">
              <button
                onClick={decrement}
                className="text-black font-bold  px-4 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
              >
                -
              </button>
              <span className="text-white font-bold border px-4 border-purple rounded-full shadow-[1px_2px_0_1px_#ba10ba]">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="text-black font-bold  px-4 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
              >
                +
              </button>
            </div>
            <button
              onClick={handleProceed}
              className={`mt-6 text-white px-6 py-1 rounded-md ${
                quantity === 0
                  ? "bg-gray-900 text-white"
                  : "bg-purple text-white"
              }`}
            >
              Proceed
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
      {screenState === 1 && (
        <TicketForm onProceed={handleProceed} screenState={setScreenState} />
      )}
    </Layout>
  );
};
export default TicketDetails;