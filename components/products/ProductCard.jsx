import Image from "next/image";
import { useState } from "react";
import { useCart } from "../cart/CartProvider";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const increment = () => setQuantity(quantity + 1)
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);


   const handleAddToCart = () => {
     addToCart(product, quantity); // Add quantity to cart
     setQuantity(0); // Reset quantity
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
        <div className="xs:flex">
          <div className="xs:flex-col md:flex md:justify-between font-bold text-white italic">
            <p className="">{product.size}</p>
            <p className="">#{product.price}</p>
          </div>
          <div className="xs:flex-col xs:justify-center xs items-center md:flex md:justify-between">
            <button
              onClick={decrement}
              className="text-black xs:text-[9px] font-bold xs:px-2 md:px-4 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
            >
              Remove
            </button>
            <span className="text-white xs:text-[9px] font-bold border px-4 border-purple rounded-full shadow-[1px_2px_0_1px_#ba10ba]">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="text-black xs:text-[9px] xs:px-2 font-bold  px-4 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
            >
              Add
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
