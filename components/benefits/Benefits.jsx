import React from 'react'
import BenefitsCard from './BenefitsCard';


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
    <div className="w-full xs:px-[5%] md:px-[10%] md:pb-0 py-[4rem]">
      <div className="flex justify-between items-center xs:gap-6 w-full">
        <div className="font-bold xs:w-[50%]">
          <h2 className=" text-[1rem] text-purple">Our Benefits</h2>
          <p className="xs:text-[1rem] text-[2rem] capitalize">
            Why you should choose{" "}
            <span className="text-purple">azer cinema</span>
          </p>
        </div>
        <div className="w-[50%] text-white">
          <p className="xs:text-[0.8rem] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius
            to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims
            ad minim veniam. Aenean massa.
          </p>
        </div>
      </div>
      <div className="xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 md:gap-10 lg:grid lg:grid-cols-4 lg:gap-10 mt-8">
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