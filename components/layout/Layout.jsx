import React from "react";
import Header from "../header/Header";
import CardSlider from "../slider/CardSlider";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-center items-center h-[50px] w-full absolute left-0 top-14 z-50">
          <Header />
        </div>
        <CardSlider />
      </div>
      <main className=" h-max">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
