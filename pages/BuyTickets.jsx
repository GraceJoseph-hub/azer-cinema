import { useState } from "react";
import Layout from "@/components/layout/Layout";
import MovieDate from "@/components/movieSchedule/MovieDate";
import TicketCard from "@/components/tickets/TicketCard";


const BuyTickets = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <Layout>
      <div className="relative h-[70vh] w-full bg-[url('/img/ticket2.jpg')] bg-no-repeat bg-cover bg-top">
        <div className="absolute top-[60%] left-[10%] w-[30%]">
          <h2 className="xs:text-[1rem] md:text-[2rem] text-purple font-bold">
            Choose Your Seat
          </h2>
          <p className="xs:text-sm">
            Make it yours! Select the perfect spot to catch every exciting
            moment.
          </p>
        </div>
      </div>
      <div className="flex xs:gap-[2rem] md:gap-[5rem] items-start px-[15%] xs:py-[10%] md:py-[4%] w-full">
        <MovieDate onDateClick={handleDateClick} className=" flex flex-col" />
        <TicketCard selectedDate={selectedDate} />
      </div>
    </Layout>
  );
};

export default BuyTickets;
