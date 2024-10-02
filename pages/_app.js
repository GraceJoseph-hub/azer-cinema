import "@/styles/globals.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFacebook, faInstagram, faTwitter)
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import "swiper/css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
