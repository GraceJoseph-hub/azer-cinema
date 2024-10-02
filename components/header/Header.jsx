import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo.png'


const Header = () => {
  return (
    <div className="flex gap-14">
      <Image src={logo} alt="logo" className="w-[40px] h-[50px]" />
      <Link href="/">Home</Link>
      <Link href="/BuyTickets">Buy Tickets</Link>
      <Link href="/Contact">Contact Us</Link>
      <Link href="/FoodDrinks">Food and Drinks</Link>
    </div>
  );
}

export default Header