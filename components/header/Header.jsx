import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/About",
    name: "About Us",
  },
  {
    path: "/BuyTickets",
    name: "Buy Tickets",
  },
  {
    path: "/FoodDrinks",
    name: "Food and Drinks",
  },
];

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className="flex gap-14">
      <Image src={logo} alt="logo" className="w-[40px] h-[50px]" />
      {links.map((link, index) => (
        <div className="group relative h-[30px]" key={`${link.name}-${index}`}>
          <Link
            href={link.path}
            className={`text-base transition duration-300 hover:text-purple active:text-purple ${
              currentRoute === link.path ? "text-purple" : "text-white"
            }`}
          >
            {link.name}
          </Link>
          <span className="absolute z-20 bottom-0 left-0 h-[0.3em] w-0 rounded-full bg-purple duration-200 ease-in-out group-hover:w-full"></span>
        </div>
      ))}
    </div>
  );
};

export default Header;
