import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const isActive = (path) => currentRoute.pathname === path;


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex gap-14 max-[768px]:justify-between max-[768px]:w-full max-[768px]:px-6">
      <Image src={logo} alt="logo" className="w-[40px] h-[50px]" />

      {/* desktop screen */}
      {links.map((link, index) => (
        <div
          className="hidden md:flex group relative h-[30px]"
          key={`${link.name}-${index}`}
        >
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

      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes size={24} className="text-white" />
        ) : (
          <FaBars size={24} className="text-white" />
        )}
      </div>

      {/* mobile screen */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 z-40">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={`${link.name}-${index}`}
              className={`${
                isActive(link.path) ? "text-[#12305B] font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
