import Image from "next/image";
import { useState } from "react";
import { useCart } from "../cart/CartProvider";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const increment = () => setQuantity(quantity + 1)
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);


   const handleAddToCart = () => {
     addToCart(product, quantity); 
     setQuantity(0); 
  };
  
  return (
    <div className=" bg-transparent px-4 py-6 rounded-md shadow-[0px_3px_15px_0px_#ba10ba2e]">
      <div className="flex flex-col justify-center items-center  w-full">
        <Image src={product.image} alt={product.name} height={200} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="xs:text-[1rem] xs:text-center md:text-[1.3rem] text-white font-bold font-sunflower">
          {product.name}
        </p>
        <div className="xs:flex xs:justify-between">
          <div className="xs:flex-col xs:text-[sm] md:text-[1rem] md:flex md:justify-between font-bold text-white italic">
            <p className="">{product.size}</p>
            <p className="">#{product.price}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={decrement}
              className="text-black xs:text-[9px] font-bold xs:px-2 md:px-3 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
            >
              -
            </button>
            <span className="text-white xs:text-[9px] font-bold border px-3 border-purple rounded-full shadow-[1px_2px_0_1px_#ba10ba]">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="text-black xs:text-[9px] xs:px-2 font-bold  md:px-3 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
            >
              +
            </button>
          </div>
        </div>
        <button
          className="border-purple bg-white rounded-md text-black"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
