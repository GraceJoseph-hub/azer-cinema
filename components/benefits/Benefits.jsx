import React from 'react'
import BenefitsCard from './BenefitsCard';
// import affordable from "../../public/img/affordable.jpg";
// import customerService from "../../public/img/customerService.jpg";
// import latestMovies from "../../public/img/latestMovies.jpg";
// import snacks from "../../public/img/snacks.jpeg";

const Benefits = () => {
  const benefitsData = [
    {
      path: "/img/affordable.jpg",
      title: "Affordable Tickets",
    },
    {
      path: "/img/customerService.jpg",
      title: "24/7 Customer Service",
    },
    {
      path: "/img/latestMovies.jpg",
      title: "Latest Movies",
    },
    {
      path: "/img/snacks.jpeg",
      title: "Mouth-Watering Snacks",
    },
  ];
  return (
    <div className="w-full px-[10%] py-[4rem]">
      <div className="flex justify-between items-center w-full">
        <div className="font-bold">
          <h2 className="text-[1rem] text-purple">Our Benefits</h2>
          <p className="text-[3rem] capitalize">
            Why you should choose azer cinema
          </p>
        </div>
        <div className="w-[50%] text-purple">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius
            to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims
            ad minim veniam. Aenean massa.
          </p>
        </div>
      </div>
      {/* <BenefitsCard /> */}
      <div className='grid grid-cols-4'>
        {benefitsData.map((benefit, index) => (
          <BenefitsCard
            key={index}
            src={benefit.path}
            alt={benefit.path}
            title={benefit.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Benefits