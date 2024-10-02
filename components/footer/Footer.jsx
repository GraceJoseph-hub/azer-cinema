import Image from "next/image"
import Link from "next/link";
import logo from "../../public/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
      <div className="flex flex-col justify-center items-center gap-10 bg-black py-10 border-t-2 border-purple">
        <div className="flex items-center gap-10">
          <Image src={logo} className="w-[80px]" alt="logo" />
          <h1 className="text-[2rem] font-sunflower">Azer Cinema</h1>
        </div>
        <div className="flex gap-10">
          <Link
            href="/"
            className="w-[40px] h-[40px] px-2 pt-2 rounded-full bg-white shadow-[1px_3px_2px_2px_#ba10ba] border border-purple animate__fadeOut animate__animated animate__flip animate__repeat-3 animate__delay-3s"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-purple text-[1.5rem]"
            />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] px-2 pt-2 rounded-full bg-white shadow-[1px_3px_2px_2px_#ba10ba] border border-purple animate__animated animate__flip animate__repeat-3 animate__delay-3s"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-purple text-[1.5rem]"
            />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] px-2 pt-2 rounded-full bg-white shadow-[1px_3px_2px_2px_#ba10ba] border border-purple animate__animated animate__flip animate__repeat-3 animate__delay-3s"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-purple text-[1.5rem]"
            />
          </Link>
        </div>
      </div>
  );
}

export default Footer