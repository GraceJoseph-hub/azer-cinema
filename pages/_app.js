import "@/styles/globals.css";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; 
import { library } from "@fortawesome/fontawesome-svg-core";
import CartProvider from "@/components/cart/CartProvider";

library.add(
  faFacebook,
  faInstagram,
  faTwitter,
  faPhone,
  faMapMarkerAlt,
  faUser
);

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
