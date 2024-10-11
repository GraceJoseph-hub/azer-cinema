import { useRouter } from "next/router";
import Header from "../header/Header";
import CardSlider from "../slider/CardSlider";
import Footer from "../footer/Footer";
import CartBtn from "../cart/CartBtn";




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
        {currentRoute === "/FoodDrinks" && (
          <div className="fixed top-4 right-4 z-50">
            <CartBtn />
          </div>
        )}
      </div>
      <main className=" h-max">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
