import { useState } from 'react'
import { useCart } from "./CartProvider";
import Modal from "../UI/Modal";
import classes from "./CartBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const CartBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  const { cartCount, totalAmount } = useCart();

  return (
    <>
      <button
        onClick={openModalHandler}
        className="fixed top-10 right-8 bg-purple text-white font-bold px-4 py-2 rounded-full shadow-lg z-50"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className='mr-2 ml-2'>Your Cart</span>
        <span>{cartCount}</span>
      </button>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.actions}>
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>#{totalAmount.toFixed(2)}</span>
            </div>
            <span></span>
            <button
              className={classes["button--alt"]}
              onClick={closeModalHandler}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CartBtn