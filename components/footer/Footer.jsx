import Image from "next/image"
import Link from "next/link";
import logo from "../../public/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <div className="flex">
        <h1>Azer Cinema</h1>
        <Image src={logo} className="w-[80px]" alt="logo" />
      </div>
      <Link href="/">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </div>
  );
}

export default Footer