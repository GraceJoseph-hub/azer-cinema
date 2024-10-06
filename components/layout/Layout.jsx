import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../header/Header";
import CardSlider from "../slider/CardSlider";
import Footer from "../footer/Footer";

const Layout = ({ children, className }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className={`${className}`}>
      <div className="relative">
        <div className="flex justify-center items-center h-[50px] w-full absolute left-0 top-14 z-50">
          <Header />
        </div>
        {currentRoute === "/" && <CardSlider />}
        {/* {currentRoute === "/" ? (
          <CardSlider />
        ) : (
          <div
            className="h-[100vh] w-full relative bg-fixed"
            // style={{ backgroundAttachment: "fixed" }}
          >
            <Image
              src={imgUrl}
              alt="Background Image"
              className="w-full h-full object-cover object-center"
              layout="fill"
              priority={true}
            />
          </div>
        )} */}
      </div>
      <main className=" h-max">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
