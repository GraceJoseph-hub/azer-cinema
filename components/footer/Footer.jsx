import Image from "next/image"
import Link from "next/link";
import logo from "../../public/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="bg-black border-t-2 border-purple mt-10 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#ba10ba"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,213.3C384,213,480,203,576,202.7C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-col justify-center items-center gap-10 bg-black opacity-100 h-full w-full py-14">
        <div className="flex items-center gap-10">
          <Image src={logo} className="w-[80px]" alt="logo" />
          <h1 className="text-[2rem] font-sunflower">Azer Cinema</h1>
        </div>
        <div className="flex gap-10">
          <Link
            href="/"
            className="w-[40px] h-[40px] px-2 pt-2 rounded-full bg-white shadow-[1px_3px_2px_2px_#000000] border border-[#000000] animate__fadeOut animate__animated animate__flip animate__repeat-3 animate__delay-3s"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-purple text-[1.5rem]"
            />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] px-2 pt-2 rounded-full bg-white shadow-[1px_3px_2px_2px_#000000] border border-[#000000] animate__animated animate__flip animate__repeat-3 animate__delay-3s"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-purple text-[1.5rem]"
            />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] px-2 pt-2 rounded-full bg-white shadow-[1px_3px_2px_2px_#000000] border border-[#000000] animate__animated animate__flip animate__repeat-3 animate__delay-3s"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-purple text-[1.5rem]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer