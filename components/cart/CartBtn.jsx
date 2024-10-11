// import { useRouter } from "next/router";
import { useCart } from "./CartProvider";

const CartBtn = () => {
  // const router = useRouter();
  const { cartCount } = useCart();

  // const handleCartClick = () => {
  //   router.push("/cart"); 
  // };
  return (
    <button
      // onClick={handleCartClick}
      className="fixed top-4 right-4 bg-purple text-white font-bold px-4 py-2 rounded-full shadow-lg z-50"
    >
      Cart {cartCount}
    </button>
  );
}

export default CartBtn