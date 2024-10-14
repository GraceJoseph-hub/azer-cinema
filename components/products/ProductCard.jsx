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
        <p className="text-[1.3rem] text-black font-bold font-sunflower">
          {product.name}
        </p>
        <div className="flex justify-between font-bold text-black italic">
          <p className="">{product.size}</p>
          <p className="">#{product.price}</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={decrement}
            className="text-black font-bold  px-4 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
          >
            Remove
          </button>
          <span className="text-white font-bold border px-4 border-purple rounded-full shadow-[1px_2px_0_1px_#ba10ba]">
            {quantity}
          </span>
          <button
            onClick={increment}
            className="text-black font-bold  px-4 border-purple bg-white rounded-full shadow-[1px_2px_0_1px_#ba10ba]"
          >
            Add
          </button>
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
