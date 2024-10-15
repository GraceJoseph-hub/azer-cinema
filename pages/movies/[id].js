import { useRouter } from "next/router";
import { useState } from "react";
import moviesData from '../../components/movieSchedule/moviesData';
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import TicketForm from "@/pages/TicketForm";


const TicketDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = router.query;

  //  const increment = () => setQuantity(quantity + 1);
  //  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
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
      router.push("/TicketForm");
    } else {
      setError("Please select the number of tickets.");
    }
  };


  if (!id) return <p>Loading...</p>;

  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <Layout>
      <div className="h-screen w-full bg-[url('/img/ticket2.jpg')] bg-no-repeat bg-cover bg-top"></div>
      <div className="px-[5%] my-[50px]">
        <div className="flex items-center gap-14 bg-gray-900 rounded-lg">
          <Image src={movie.img} alt={movie.title} className="rounded-lg" />
          <div>
            <h2 className="text-[2rem]">
              <span>Movie Title : </span>
              {movie.title}
            </h2>
            <p className="text-[1rem]">
              <span className="text-purple">Genre: </span>
              {movie.genre}
            </p>
            <p className="text-[1rem]">
              <span className="text-purple">Movie Duration: </span>duration
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
            disabled={quantity === 0}
            className={`mt-6 border px-6 py-1 rounded-md cursor-pointer ${
              quantity === 0
                ? "bg-gray-900 text-white"
                : "bg-purple text-white"
            }`}
          >
            Proceed
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {/* <TicketForm /> */}
        </div>
      </div>
    </Layout>
  );
};
export default TicketDetails;